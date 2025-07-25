import React from "react";

interface BlogCardProps {
  title: string;
  summary: string;
  image: string;
  link?: string;
}

export function BlogCard({ title, summary, image, link }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
      <img src={image} alt={title} className="rounded mb-4 w-full h-40 object-cover" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{summary}</p>
      {link && <a href={link} className="text-gold font-bold">Read More</a>}
    </div>
  );
}