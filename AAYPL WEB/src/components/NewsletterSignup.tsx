import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export function TeamMemberCard({ name, role, image, bio }: TeamMemberCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-3 object-cover" />
      <h3 className="text-xl font-bold">{name}</h3>
      <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">{role}</span>
      {bio && <p className="text-gray-700 dark:text-gray-300 text-center">{bio}</p>}
    </div>
  );
}