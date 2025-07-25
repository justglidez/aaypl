import React from "react";
import Head from "next/head";

const notifications = [
  {
    id: 1,
    title: "Pan-African Youth Summit Registration Open",
    description: "Register for the 2025 summit in Abuja! Early bird slots available until August 31.",
    date: "2025-07-20",
    type: "Event",
  },
  {
    id: 2,
    title: "New Blog: Digital Skills for Political Advocacy",
    description: "Our latest article explores practical ways for youth to use digital tools in political engagement.",
    date: "2025-07-18",
    type: "Blog",
  },
  {
    id: 3,
    title: "Policy Alert: Youth Quota Bill Passed in Kenya",
    description: "Kenya’s parliament passes new reforms to ensure more youth in government. Read our analysis.",
    date: "2025-07-10",
    type: "Policy",
  },
];

export default function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Notifications | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Stay updated with the latest notifications from AAYPL: events, blogs, policy alerts, and more."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gold mb-4">Notifications</h1>
            <p className="text-xl mb-4">
              Get the latest news, alerts, and opportunities from All Africa Young Political Leaders.
            </p>
          </div>
        </section>
        <section className="py-12 max-w-3xl mx-auto px-4">
          <div className="space-y-6">
            {notifications.map((note) => (
              <div
                key={note.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow border-l-4 border-gold"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-lg">{note.title}</h2>
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {note.type}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{note.description}</p>
                <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(note.date).toLocaleDateString()}</div>
              </div>
            ))}
            {!notifications.length && (
              <div className="text-center text-gray-500 dark:text-gray-300">No notifications at this time.</div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}