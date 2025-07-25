import React, { useEffect, useState } from "react";

export default function UserPage() {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(setUser);
  }, []);

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white rounded shadow p-4">
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Role:</strong> {user.role}</div>
      </div>
    </main>
  );
}