import React from "react";
import Head from "next/head";

const objectives = [
  {
    title: "Empower Youth Leadership",
    description:
      "Provide training, mentorship, and resources to develop a new generation of African political, civic, and economic leaders.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <path d="M12 19l9 2-7-7 4-12-9 7-4 12 7-7z" />
      </svg>
    ),
  },
  {
    title: "Promote Good Governance",
    description:
      "Advocate for transparency, accountability, and ethical leadership in government and institutions at all levels.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Foster Pan-African Unity",
    description:
      "Encourage collaboration and partnership among youth across the continent, breaking down regional and linguistic barriers.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l4-4 4 4" />
      </svg>
    ),
  },
  {
    title: "Advance Policy Innovation",
    description:
      "Support youth-driven research and advocacy for policies that address Africa’s unique challenges and opportunities.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M8 9h8" />
      </svg>
    ),
  },
  {
    title: "Champion Social Inclusion",
    description:
      "Promote gender equality, disability inclusion, and marginalised voices in leadership and participation.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 12v8m-4 0h8" />
      </svg>
    ),
  },
  {
    title: "Build Sustainable Networks",
    description:
      "Create lasting connections among youth leaders, organizations, and institutions for ongoing collaboration.",
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24">
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="12" cy="7" r="3" />
        <path d="M7 17l5-10 5 10" />
      </svg>
    ),
  },
];

const faq = [
  {
    q: "How does AAYPL support young leaders?",
    a: "Through mentorship, training, networking opportunities, and direct engagement with policymakers and institutions.",
  },
  {
    q: "Can anyone join AAYPL?",
    a: "Membership is open to African youth from all walks of life, regardless of gender, background, or experience level.",
  },
  {
    q: "What kind of events does AAYPL organize?",
    a: "We organize summits, bootcamps, online forums, policy dialogues, and local community initiatives across Africa.",
  },
  {
    q: "How can I participate in programs?",
    a: "Check our Events page regularly and follow us on social media for the latest updates on programs and applications.",
  },
];

export default function ObjectivesPage() {
  return (
    <>
      <Head>
        <title>Objectives | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Discover the objectives of AAYPL: empowering youth, promoting good governance, and fostering unity across Africa."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800 shadow-inner">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gold mb-4">Our Objectives</h1>
            <p className="text-xl mb-4">
              At All Africa Young Political Leaders (AAYPL), our objectives are rooted in the belief that Africa’s future is in the hands of its youth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We are committed to creating an environment where young Africans are empowered, equipped, and inspired to lead with integrity and purpose.
            </p>
          </div>
        </section>

        {/* Objectives Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map(({ title, description, icon }) => (
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

        {/* Quote */}
        <section className="py-12 bg-gold/10 dark:bg-gold/20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <blockquote className="text-2xl italic font-semibold mb-2 text-gold">
              “The youth of Africa are not only the leaders of tomorrow, but also the partners of today.”
            </blockquote>
            <span className="block text-gray-700 dark:text-gray-300 mt-2">— AAYPL Vision Statement</span>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="border-b border-gold pb-4">
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold text-left"
                  aria-expanded="false"
                  tabIndex={0}
                  style={{ outline: "none" }}
                >
                  {q}
                  <span className="text-gold ml-2">+</span>
                </button>
                <p className="mt-2 text-gray-700 dark:text-gray-200">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-gold/60 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl mb-6">
              Join AAYPL and become part of a new generation of African leaders. Together, we can build a brighter future.
            </p>
            <a
              href="/register"
              className="inline-block bg-gold text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-gold/90 transition"
            >
              Get Involved
            </a>
          </div>
        </section>
      </main>
    </>
  );
}