-- Hundemoment database schema
-- Kjør denne i Supabase SQL Editor for å opprette tabellene

-- =====================================================
-- PROFILES (utvider auth.users med rolle og navn)
-- =====================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  created_at timestamptz not null default now()
);

-- Trigger: opprett profil når en ny bruker registrerer seg
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =====================================================
-- COURSES (fysiske kurs)
-- =====================================================
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  description text,
  start_date date not null,
  weekday text,
  time_of_day text,
  duration_weeks int,
  location text,
  price_nok int not null,
  max_participants int not null default 8,
  status text not null default 'draft' check (status in ('draft', 'open', 'full', 'archived')),
  cover_image_url text,
  learn_points text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists courses_status_start_idx on public.courses (status, start_date);

-- =====================================================
-- ONLINE COURSES (videokurs)
-- =====================================================
create table if not exists public.online_courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  price_nok int not null,
  duration_minutes int,
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enkeltleksjoner (videoer) i online kurs
create table if not exists public.online_lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.online_courses(id) on delete cascade,
  title text not null,
  description text,
  video_url text,
  duration_seconds int,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists online_lessons_course_idx on public.online_lessons (course_id, sort_order);

-- =====================================================
-- SIGNUPS (påmeldinger til fysiske kurs)
-- =====================================================
create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete restrict,
  full_name text not null,
  email text not null,
  phone text,
  dog_name text,
  message text,
  invoice_status text not null default 'pending' check (invoice_status in ('pending', 'sent', 'paid', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists signups_course_idx on public.signups (course_id);

-- =====================================================
-- PURCHASES (kjøp av online kurs)
-- =====================================================
create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  online_course_id uuid not null references public.online_courses(id) on delete restrict,
  user_id uuid references auth.users(id) on delete set null,
  full_name text not null,
  email text not null,
  invoice_status text not null default 'pending' check (invoice_status in ('pending', 'sent', 'paid', 'cancelled')),
  access_granted boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists purchases_user_idx on public.purchases (user_id);
create index if not exists purchases_course_idx on public.purchases (online_course_id);

-- =====================================================
-- ROW LEVEL SECURITY
-- =====================================================
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.online_courses enable row level security;
alter table public.online_lessons enable row level security;
alter table public.signups enable row level security;
alter table public.purchases enable row level security;

-- Hjelpefunksjon: er brukeren admin?
create or replace function public.is_admin()
returns boolean
language sql
security definer set search_path = public
as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- Profiles: brukeren kan se sin egen; admin kan se alle
drop policy if exists "profiles_self_read" on public.profiles;
create policy "profiles_self_read" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

-- Courses: alle kan lese åpne/fulle kurs; admin kan alt
drop policy if exists "courses_public_read" on public.courses;
create policy "courses_public_read" on public.courses
  for select using (status in ('open', 'full') or public.is_admin());

drop policy if exists "courses_admin_write" on public.courses;
create policy "courses_admin_write" on public.courses
  for all using (public.is_admin()) with check (public.is_admin());

-- Online courses: alle kan lese publiserte; admin kan alt
drop policy if exists "online_courses_public_read" on public.online_courses;
create policy "online_courses_public_read" on public.online_courses
  for select using (status = 'published' or public.is_admin());

drop policy if exists "online_courses_admin_write" on public.online_courses;
create policy "online_courses_admin_write" on public.online_courses
  for all using (public.is_admin()) with check (public.is_admin());

-- Online lessons: kun de som har kjøpt kurset kan se innhold; admin ser alt
drop policy if exists "online_lessons_purchased_read" on public.online_lessons;
create policy "online_lessons_purchased_read" on public.online_lessons
  for select using (
    public.is_admin() or exists (
      select 1 from public.purchases p
      where p.online_course_id = online_lessons.course_id
        and p.user_id = auth.uid()
        and p.access_granted = true
    )
  );

drop policy if exists "online_lessons_admin_write" on public.online_lessons;
create policy "online_lessons_admin_write" on public.online_lessons
  for all using (public.is_admin()) with check (public.is_admin());

-- Signups: admin kan lese alle; alle kan opprette (påmelding er offentlig)
drop policy if exists "signups_admin_read" on public.signups;
create policy "signups_admin_read" on public.signups
  for select using (public.is_admin());

drop policy if exists "signups_public_insert" on public.signups;
create policy "signups_public_insert" on public.signups
  for insert with check (true);

drop policy if exists "signups_admin_update" on public.signups;
create policy "signups_admin_update" on public.signups
  for update using (public.is_admin()) with check (public.is_admin());

-- Purchases: brukeren kan se sine egne; admin ser alle; alle kan opprette
drop policy if exists "purchases_self_read" on public.purchases;
create policy "purchases_self_read" on public.purchases
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "purchases_public_insert" on public.purchases;
create policy "purchases_public_insert" on public.purchases
  for insert with check (true);

drop policy if exists "purchases_admin_update" on public.purchases;
create policy "purchases_admin_update" on public.purchases
  for update using (public.is_admin()) with check (public.is_admin());
