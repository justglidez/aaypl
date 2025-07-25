import React, { useState } from "react";
import Head from "next/head";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Replace with your real search API endpoint
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Search | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Search AAYPL’s database for articles, events, and opportunities for youth leaders across Africa."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gold mb-6 text-center">Search</h1>
            <form onSubmit={handleSearch} className="flex gap-2 mb-8">
              <input
                className="flex-1 p-3 rounded border border-gray-300"
                placeholder="Type your search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <button className="px-6 py-3 bg-gold text-white rounded-full font-bold" type="submit">
                Search
              </button>
            </form>
            {loading && <p>Loading results...</p>}
            <ul className="space-y-2">
              {results.map((item, idx) => (
                <li key={idx} className="bg-gray-100 dark:bg-gray-800 rounded shadow p-4">
                  {/* Customize how you render results */}
                  <span>{item.title || JSON.stringify(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}