export type LivestreamStatus = "upcoming" | "today" | "replay";

export interface Speaker {
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface LivestreamItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullOverview?: string;
  status: LivestreamStatus;
  date: string;
  time: string;
  fullDateTime?: string;
  category: string;
  thumbnail: string;
  bannerImage?: string;
  videoUrl?: string;
  speakers: Speaker[];
  badgeText?: string;
  accentColor?: string;
}

export interface CategoryGroup {
  id: string;
  label: string;
  items: LivestreamItem[];
}
