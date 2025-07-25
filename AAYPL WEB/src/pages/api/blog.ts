import React from "react";
import { mockBlogs } from "../data/mockBlogs";
import { BlogCard } from "../components/BlogCard";

export default function BlogPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBlogs.map(blog => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  );
}