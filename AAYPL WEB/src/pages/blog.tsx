import React, { useState } from "react";
import Head from "next/head";

const blogPosts = [
  {
    id: "1",
    title: "How African Youth Are Transforming Policy",
    date: "2025-07-20",
    summary: "Young leaders are breaking barriers in politics, introducing innovative reforms and pushing for inclusive governance.",
    author: "Fatou Keita",
    image: "/images/blogs/policy-youth.jpg",
    link: "/blog/african-youth-transforming-policy",
    tags: ["Policy", "Youth", "Leadership"],
  },
  {
    id: "2",
    title: "AAYPL 2025 Summit Recap",
    date: "2025-07-16",
    summary: "Highlights, keynotes, and lessons from the largest youth political summit in Africa.",
    author: "Kwame Mensah",
    image: "/images/blogs/summit-recap.jpg",
    link: "/blog/aaypl-2025-summit-recap",
    tags: ["Events", "Summit", "Networking"],
  },
  {
    id: "3",
    title: "Digital Tools for Advocacy",
    date: "2025-07-10",
    summary: "A guide to digital platforms and best practices for political advocacy and mobilization.",
    author: "Lilian Njeri",
    image: "/images/blogs/digital-advocacy.jpg",
    link: "/blog/digital-tools-for-advocacy",
    tags: ["Digital", "Advocacy", "Technology"],
  },
];

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(
    post =>
      (!tag || post.tags.includes(tag)) &&
      (post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase()) ||
        post.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Head>
        <title>Blog | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Read the latest articles, news, and thought leadership from All Africa Young Political Leaders and our community."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gold mb-4">Blog</h1>
            <p className="text-xl mb-4">
              Insights, news, and stories from Africa’s youth leadership movement.
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-2 mt-6">
              <input
                className="w-full max-w-md p-3 rounded border border-gray-300"
                placeholder="Search articles, authors..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <select
                className="w-full max-w-xs p-3 rounded border border-gray-300"
                value={tag || ""}
                onChange={e => setTag(e.target.value || null)}
              >
                <option value="">All Tags</option>
                {allTags.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </form>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-1">{post.title}</h2>
                  <div className="text-gold font-semibold mb-1">{new Date(post.date).toLocaleDateString()}</div>
                  <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">{post.author}</div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{post.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gold/20 text-gold rounded text-xs font-bold">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
            {!filteredPosts.length && (
              <div className="col-span-full text-center text-gray-600 dark:text-gray-400">No blog posts found.</div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}