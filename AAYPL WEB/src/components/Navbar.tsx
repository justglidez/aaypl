import React from "react";

export function Navbar() {
  return (
    <nav className="bg-gold text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-2xl">AAYPL</div>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/events" className="hover:underline">Events</a></li>
        <li><a href="/blog" className="hover:underline">Blog</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}