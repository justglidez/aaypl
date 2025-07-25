export interface Blog {
  id: string;
  title: string;
  summary: string;
  coverImage: string;
  author: string;
  published: string; // ISO date
  link: string;
}

export const mockBlogs: Blog[] = [
  {
    id: "blog-001",
    title: "The Rise of Youth Leadership in Africa",
    summary: "Young people are making waves in politics and policy across the continent.",
    coverImage: "/images/blogs/youth-leadership.jpg",
    author: "Jane Doe",
    published: "2025-05-12",
    link: "/blog/youth-leadership"
  },
  {
    id: "blog-002",
    title: "AAYPL 2025 Summit Highlights",
    summary: "Key takeaways and memorable moments from this year's AAYPL summit.",
    coverImage: "/images/blogs/summit-2025.jpg",
    author: "John Smith",
    published: "2025-08-19",
    link: "/blog/summit-2025"
  }
];