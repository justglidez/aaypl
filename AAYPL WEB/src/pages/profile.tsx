import React, { useEffect, useState } from "react";
import Head from "next/head";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  joined: string;
  country: string;
  bio: string;
  avatar?: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(setUser);
  }, []);

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <>
      <Head>
        <title>Profile | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="View your AAYPL profile, edit your info, and manage your membership."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-extrabold text-gold mb-4 text-center">My Profile</h1>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center">
              <img
                src={user.avatar || "/images/default-avatar.png"}
                alt={user.name}
                className="w-28 h-28 rounded-full border-2 border-gold mb-4 object-cover"
              />
              <div className="text-xl font-bold mb-1">{user.name}</div>
              <div className="text-gold font-semibold mb-2">{user.role}</div>
              <div className="mb-2">{user.country}</div>
              <div className="text-gray-700 dark:text-gray-300 mb-4 text-center">{user.bio}</div>
              <div className="w-full flex flex-col md:flex-row justify-around text-gray-600 dark:text-gray-400 mb-2">
                <span>
                  <b>Email:</b> {user.email}
                </span>
                <span>
                  <b>Joined:</b> {new Date(user.joined).toLocaleDateString()}
                </span>
              </div>
              <a
                href="/settings"
                className="mt-4 px-6 py-2 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
              >
                Edit Profile / Settings
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}