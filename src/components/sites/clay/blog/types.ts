export type BlogCategory =
  | "Clay Announcements"
  | "Case Studies"
  | "Thought Leadership"
  | "Outbound Plays";

export interface Author {
  name: string;
  role?: string;
  avatar?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime?: string;
  authors: Author[];
  thumbnail: string;
  bannerImage?: string;
  isFeatured?: boolean;
  contentSections?: {
    id: string;
    heading?: string;
    body: string;
    codeSnippet?: string;
    callout?: string;
  }[];
  tableOfContents?: TableOfContentsItem[];
}
