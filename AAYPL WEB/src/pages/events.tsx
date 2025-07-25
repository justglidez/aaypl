import React, { useState } from "react";
import Head from "next/head";

const eventsList = [
  {
    id: "1",
    title: "Pan-African Youth Leadership Summit 2025",
    date: "2025-09-15",
    location: "Abuja, Nigeria",
    description:
      "A flagship annual summit bringing together young political leaders, policy makers, and activists from across Africa for workshops, keynotes, and networking.",
    cover: "/images/events/summit2025.jpg",
    link: "/events/pan-african-youth-leadership-summit-2025",
  },
  {
    id: "2",
    title: "Digital Skills Bootcamp",
    date: "2025-10-10",
    location: "Online",
    description:
      "A week-long virtual bootcamp on digital advocacy, social media strategy, and online civic engagement for emerging youth leaders.",
    cover: "/images/events/digital-skills.jpg",
    link: "/events/digital-skills-bootcamp",
  },
  {
    id: "3",
    title: "Policy Advocacy Masterclass",
    date: "2025-11-05",
    location: "Accra, Ghana",
    description:
      "Intensive masterclass on policy research, advocacy campaigns, and lobbying skills, featuring expert trainers and policymakers.",
    cover: "/images/events/policy-masterclass.jpg",
    link: "/events/policy-advocacy-masterclass",
  },
];

export default function EventsPage() {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsList.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Events | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Explore upcoming events, summits, and training sessions for young political leaders across Africa."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gold mb-4">Events</h1>
            <p className="text-xl mb-4">
              Join AAYPL’s events to connect, learn, and lead with Africa’s most promising young leaders.
            </p>
            <form className="flex justify-center gap-2 mt-6">
              <input
                className="w-full max-w-sm p-3 rounded border border-gray-300"
                placeholder="Search by event or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </form>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <a
                key={event.id}
                href={event.link}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={event.cover}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                  <div className="text-gold font-semibold mb-1">{new Date(event.date).toLocaleDateString()}</div>
                  <div className="mb-2">{event.location}</div>
                  <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                </div>
              </a>
            ))}
            {!filteredEvents.length && (
              <div className="col-span-full text-center text-gray-600 dark:text-gray-400">No events found.</div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}