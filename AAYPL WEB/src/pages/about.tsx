import React from "react";
import Head from "next/head";

// Data for organization timeline, team, and impact
const timeline = [
  {
    year: 2015,
    title: "Foundation",
    description:
      "AAYPL was founded by a coalition of young political activists from West, East, and Southern Africa, with the vision to unify and empower youth in African politics.",
  },
  {
    year: 2017,
    title: "First Pan-African Youth Summit",
    description:
      "Hosted in Abuja, Nigeria, this event brought together 300+ young leaders from 23 countries, sparking new collaborations and policy initiatives.",
  },
  {
    year: 2019,
    title: "Policy Advocacy Milestone",
    description:
      "AAYPL successfully influenced youth-friendly amendments in political party constitutions in 5 African countries.",
  },
  {
    year: 2023,
    title: "Digital Transformation",
    description:
      "Launched an e-learning platform and virtual townhalls, expanding reach to over 20,000 young Africans globally.",
  },
  {
    year: 2025,
    title: "Continental Impact",
    description:
      "Membership surpasses 50,000. AAYPL is recognized by African Union as a leading youth civil society partner.",
  },
];

const values = [
  {
    title: "Unity",
    description:
      "We believe in breaking down barriers—geographical, linguistic, ideological—to build a strong, united youth front.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description:
      "We encourage creative solutions and leverage technology to address Africa’s unique challenges.",
    icon: "💡",
  },
  {
    title: "Integrity",
    description:
      "We promote honesty and transparency within our organization and the societies we serve.",
    icon: "🛡️",
  },
  {
    title: "Empowerment",
    description:
      "We provide resources, mentorship, and opportunities for African youth to lead and excel.",
    icon: "🚀",
  },
];

const team = [
  {
    name: "Fatou Keita",
    role: "President",
    image: "/images/team/fatou.jpg",
    bio: "Fatou leads AAYPL with a decade of experience in political organizing and a passion for youth advocacy.",
    socials: {
      twitter: "https://twitter.com/fatoukeita",
      linkedin: "https://linkedin.com/in/fatoukeita",
    },
  },
  {
    name: "Kwame Mensah",
    role: "Secretary General",
    image: "/images/team/kwame.jpg",
    bio: "Kwame coordinates communications and oversees program delivery across Africa.",
    socials: {
      twitter: "https://twitter.com/kwamemensah",
    },
  },
  {
    name: "Lilian Njeri",
    role: "Head of Digital Engagement",
    image: "/images/team/lilian.jpg",
    bio: "Lilian drives the digital transformation strategy, ensuring AAYPL leverages tech for maximal impact.",
    socials: {
      linkedin: "https://linkedin.com/in/liliannjeri",
    },
  },
  {
    name: "Samuel Adeyemi",
    role: "Director of Programs",
    image: "/images/team/samuel.jpg",
    bio: "Samuel designs and leads leadership, mentoring, and advocacy programs continent-wide.",
    socials: {},
  },
];

const partners = [
  { name: "African Union", url: "https://au.int/" },
  { name: "UNICEF Africa", url: "https://www.unicef.org/esa/" },
  { name: "AfDB Youth Empowerment", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/african-youth-empowerment" },
  { name: "YALI", url: "https://yali.state.gov/" },
];

// Impact stats
const stats = [
  { label: "Countries Reached", value: 42 },
  { label: "Active Members", value: "52,000+" },
  { label: "Programs Delivered", value: 180 },
  { label: "Policy Wins", value: 13 },
  { label: "Annual Events", value: 9 },
  { label: "Digital Learners", value: "21,000+" },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Learn about All Africa Young Political Leaders (AAYPL): our mission, values, team, history, partners, and impact across Africa."
        />
      </Head>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-gold/60 via-white to-gray-100 dark:from-gold/20 dark:via-gray-900 dark:to-gray-800 shadow-inner">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-gold drop-shadow-lg mb-4">
              About All Africa Young Political Leaders
            </h1>
            <p className="text-xl max-w-2xl mx-auto mt-4">
              AAYPL unites, trains, and amplifies the voices of young Africans, empowering them to lead positive change in their communities and the continent.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-5xl mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To foster inclusive, innovative, and accountable leadership among Africa’s youth, equipping them with the skills and networks needed to drive sustainable development and good governance.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                A continent where young people are at the forefront of political, economic, and social transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map(({ title, description, icon }) => (
                <div
                  key={title}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center"
                >
                  <div className="text-5xl mb-3">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-gradient-to-r from-gold/10 via-white to-gold/5 dark:from-gold/10 dark:via-gray-900 dark:to-gold/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg bg-white dark:bg-gray-800 shadow p-4"
                >
                  <div className="text-3xl font-bold text-gold">{item.value}</div>
                  <div className="text-gray-500 dark:text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold mb-8 text-center">Our Journey</h2>
          <ol className="relative border-l-4 border-gold dark:border-gold/70 ml-6">
            {timeline.map((item, i) => (
              <li key={item.year} className="mb-12 ml-8">
                <span className="absolute -left-6 top-0 flex items-center justify-center w-12 h-12 bg-gold text-white rounded-full font-bold text-2xl shadow">
                  {item.year}
                </span>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 ml-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Team */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map(({ name, role, image, bio, socials }) => (
                <div
                  key={name}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-gold shadow"
                  />
                  <h3 className="text-xl font-semibold mb-1">{name}</h3>
                  <span className="text-gold font-bold mb-2">{role}</span>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-2">{bio}</p>
                  <div className="flex gap-2 mt-2">
                    {socials?.twitter && (
                      <a
                        href={socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} Twitter`}
                        className="text-blue-400 hover:text-blue-600"
                      >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.5 4.5 0 0016.5 0c-2.53 0-4.5 2.1-4.5 4.7 0 .36.04.72.12 1.06C8.09 5.7 4.29 3.8 1.67.86.9 2 1.25 3.37 2.4 4a4.5 4.5 0 01-2.03-.56v.06c0 2.2 1.49 4.03 3.54 4.45-.36.1-.75.17-1.15.17-.28 0-.54-.03-.8-.07.56 1.74 2.15 3 4.05 3.04A9.04 9.04 0 010 19.54 12.8 12.8 0 007 22c8.13 0 12.57-7.07 12.57-13.21 0-.2 0-.42-.02-.62A9.4 9.4 0 0023 3z" />
                        </svg>
                      </a>
                    )}
                    {socials?.linkedin && (
                      <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} LinkedIn`}
                        className="text-blue-700 hover:text-blue-900"
                      >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.8-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.8 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.32-.03-3-1.83-3-1.84 0-2.13 1.43-2.13 2.9v5.6h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.83-1.54 3.02 0 3.58 1.99 3.58 4.58v5.6z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="bg-gray-100 dark:bg-gray-900 py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gold mb-8">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {partners.map(({ name, url }) => (
                <a
                  href={url}
                  key={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gold rounded-full text-gold font-semibold hover:bg-gold hover:text-white transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-br from-gold/60 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-700 shadow-inner">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold mb-4">Ready to Join the Movement?</h2>
            <p className="text-xl mb-6">
              Become a member, partner, or supporter of AAYPL and help shape the future of Africa!
            </p>
            <a
              href="/register"
              className="inline-block bg-gold text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-gold/90 transition"
            >
              Register Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}