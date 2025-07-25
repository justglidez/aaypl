import React from "react";
import Head from "next/head";

const aims = [
  {
    title: "Inspire Leadership",
    description:
      "Encourage African youth to pursue leadership roles in governance, civil society, and business, fostering a new era of ethical, effective, and visionary leaders.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <path d="M12 19l9 2-7-7 4-12-9 7-4 12 7-7z" />
      </svg>
    ),
  },
  {
    title: "Advance Civic Engagement",
    description:
      "Promote active participation in democratic processes, policy advocacy, and community development among young people.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Strengthen Pan-African Solidarity",
    description:
      "Build bridges across countries and cultures, fostering mutual understanding and shared purpose for continental progress.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l4-4 4 4" />
      </svg>
    ),
  },
  {
    title: "Champion Innovation",
    description:
      "Support creative problem-solving, entrepreneurship, and technology-driven solutions to Africa’s most pressing challenges.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M8 9h8" />
      </svg>
    ),
  },
];

export default function AimsPage() {
  return (
    <>
      <Head>
        <title>Aims | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Explore the aims of AAYPL: inspiring leadership, civic engagement, unity, and innovation for Africa’s youth."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800 shadow-inner">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gold mb-4">Our Aims</h1>
            <p className="text-xl mb-4">
              The All Africa Young Political Leaders (AAYPL) is committed to equipping, connecting, and empowering the next generation of African leaders.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our aims guide every initiative, partnership, and program we deliver across the continent.
            </p>
          </div>
        </section>

        {/* Aims Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aims.map(({ title, description, icon }) => (
              <div
                key={title}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow flex flex-col items-center hover:shadow-lg transition"
              >
                <div className="mb-4">{icon}</div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-gold/60 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-6">
              Whether you’re a student, activist, entrepreneur, or policymaker, you have a role in Africa’s story. Let’s create lasting change together.
            </p>
            <a
              href="/register"
              className="inline-block bg-gold text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-gold/90 transition"
            >
              Become a Member
            </a>
          </div>
        </section>
      </main>
    </>
  );
}