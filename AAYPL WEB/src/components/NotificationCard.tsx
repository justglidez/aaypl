import React from "react";

interface NotificationCardProps {
  message: string;
  type?: "success" | "error" | "info";
}

export function NotificationCard({ message, type = "info" }: NotificationCardProps) {
  const color =
    type === "success"
      ? "bg-green-100 text-green-800"
      : type === "error"
      ? "bg-red-100 text-red-800"
      : "bg-blue-100 text-blue-800";
  return (
    <div className={`p-4 rounded shadow ${color}`}>
      <p>{message}</p>
    </div>
  );
}