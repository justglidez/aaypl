import Head from "next/head";
import Link from "next/link";

const highlights = [
  {
    title: "Empowering Africa’s Youth",
    description:
      "AAYPL enables the next generation of political leaders through mentorship, training, and opportunities.",
    image: "/images/highlights/empower.jpg",
    link: "/about",
    cta: "Learn More",
  },
  {
    title: "Upcoming Pan-African Youth Summit",
    description:
      "Join hundreds of young African leaders for networking, workshops, and policy forums.",
    image: "/images/highlights/summit.jpg",
    link: "/events",
    cta: "View Events",
  },
  {
    title: "Policy & Advocacy Success",
    description:
      "See how our members are driving real change in governments and organizations across Africa.",
    image: "/images/highlights/policy.jpg",
    link: "/objectives",
    cta: "Our Objectives",
  },
];

const news = [
  {
    title: "AAYPL Launches Digital Skills Bootcamp",
    date: "2025-07-15",
    link: "/blog/digital-skills-bootcamp",
  },
  {
    title: "Kenya Youth Quota Bill Passed: AAYPL’s Role",
    date: "2025-07-10",
    link: "/blog/kenya-youth-quota",
  },
  {
    title: "2025 Pan-African Summit: Registration Open",
    date: "2025-07-01",
    link: "/events/pan-african-summit",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="AAYPL connects, trains, and empowers Africa’s next generation of leaders. Join leadership programs, events, and advocacy today."
        />
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-24 px-4 bg-gradient-to-br from-gold/40 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gold drop-shadow-lg mb-6">All Africa Young Political Leaders</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Building a united, visionary, and empowered youth movement for Africa’s transformation.
            </p>
            <div className="flex gap-6 flex-wrap justify-center">
              <Link
                href="/register"
                className="bg-gold text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-gold/90 transition"
              >
                Join Now
              </Link>
              <Link
                href="/events"
                className="bg-white text-gold border-2 border-gold px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-gray-50 transition"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map(item => (
              <div key={item.title} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 border-2 border-gold"
                />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-block bg-gold text-white px-6 py-2 rounded-full font-semibold hover:bg-gold/90 transition"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* News/Blog */}
        <section className="py-12 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gold mb-6">Latest News</h2>
          <ul className="space-y-4">
            {news.map((n) => (
              <li key={n.title} className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded p-4">
                <div>
                  <Link href={n.link} className="font-semibold text-lg text-gold hover:underline">{n.title}</Link>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{new Date(n.date).toLocaleDateString()}</div>
                </div>
                <Link href={n.link} className="text-gold underline text-sm font-medium ml-2">Read</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-gold/60 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold mb-4">Ready to Lead?</h2>
            <p className="text-xl mb-6">
              Register now to access leadership programs, exclusive events, and a continent-wide network of changemakers.
            </p>
            <Link
              href="/register"
              className="inline-block bg-gold text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-gold/90 transition"
            >
              Become a Member
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}