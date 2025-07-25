import React, { useState } from "react";
import Head from "next/head";

export default function SettingsPage() {
  const [theme, setTheme] = useState("System");
  const [notifications, setNotifications] = useState(true);

  return (
    <>
      <Head>
        <title>Settings | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Manage your AAYPL account settings, theme preferences, and notifications."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-lg mx-auto px-4">
            <h1 className="text-4xl font-bold text-gold mb-6 text-center">Settings</h1>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-8 space-y-6">
              <div>
                <label htmlFor="theme" className="font-semibold block mb-2">Theme</label>
                <select
                  id="theme"
                  className="w-full p-3 rounded border border-gray-300"
                  value={theme}
                  onChange={e => setTheme(e.target.value)}
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div>
                <label className="font-semibold block mb-2">Notifications</label>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={e => setNotifications(e.target.checked)}
                  className="mr-2"
                />
                <span>Enable updates about events, blogs, and news</span>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-gold text-white rounded-full font-bold" type="button">
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}