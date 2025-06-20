export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  description: string;
  content: string;
  featuredImage?: string;
  author: string;
  categories: string[];
  tags: string[];
  readingTime?: number;
  excerpt?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

export interface BlogPageData {
  posts: BlogPost[];
  categories: BlogCategory[];
  tags: BlogTag[];
  totalPosts: number;
  currentPage: number;
  totalPages: number;
}