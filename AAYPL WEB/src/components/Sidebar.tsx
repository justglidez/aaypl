import React from "react";

export function Sidebar() {
  return (
    <aside className="bg-gray-100 dark:bg-gray-800 w-64 p-6">
      <nav>
        <ul className="flex flex-col gap-4">
          <li><a href="/" className="font-bold">Dashboard</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
}