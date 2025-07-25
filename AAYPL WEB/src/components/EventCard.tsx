import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
}

export function EventCard({ title, date, location, description, link }: EventCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-200 mb-1">{date}</p>
      <p className="text-gray-700 dark:text-gray-200 mb-2">{location}</p>
      <p className="mb-2">{description}</p>
      {link && (
        <a href={link} className="text-gold font-bold mt-auto">
          Learn More
        </a>
      )}
    </div>
  );
}