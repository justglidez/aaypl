import React from "react";
import { mockEvents } from "../data/mockEvents";
import { EventCard } from "../components/EventCard";

export default function EventsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </main>
  );
}