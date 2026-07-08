export type CourseStatus = "draft" | "open" | "full" | "archived";
export type OnlineCourseStatus = "draft" | "published" | "archived";
export type InvoiceStatus = "pending" | "sent" | "paid" | "cancelled";
export type UserRole = "customer" | "admin";

export type Course = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string | null;
  start_date: string;
  weekday: string | null;
  time_of_day: string | null;
  duration_weeks: number | null;
  location: string | null;
  price_nok: number;
  max_participants: number;
  status: CourseStatus;
  cover_image_url: string | null;
  learn_points: string[] | null;
  created_at: string;
  updated_at: string;
};

export type OnlineCourse = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  price_nok: number;
  duration_minutes: number | null;
  cover_image_url: string | null;
  status: OnlineCourseStatus;
  created_at: string;
  updated_at: string;
};

export type OnlineLesson = {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  video_url: string | null;
  duration_seconds: number | null;
  sort_order: number;
  created_at: string;
};

export type Signup = {
  id: string;
  course_id: string;
  full_name: string;
  email: string;
  phone: string | null;
  dog_name: string | null;
  message: string | null;
  invoice_status: InvoiceStatus;
  created_at: string;
};

export type Purchase = {
  id: string;
  online_course_id: string;
  user_id: string | null;
  full_name: string;
  email: string;
  invoice_status: InvoiceStatus;
  access_granted: boolean;
  created_at: string;
};

export type Profile = {
  id: string;
  full_name: string | null;
  role: UserRole;
  created_at: string;
};
