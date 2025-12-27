"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import EventCard from "../components/events/EventCard";
import "../styles/event.css";

export default function EventsPage() {
  const events = useSelector((state: RootState) => state.data.events);

  return (
    <main className="events-page">
      {/* Page Header */}
      <header className="events-header">
        <h1 className="events-title">Upcoming Events</h1>
        <p className="events-subtitle">
          Discover and explore all local events happening near you.
        </p>
      </header>

      {/* Events Grid */}
      {events.length === 0 ? (
        <p className="no-events">No events available.</p>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </main>
  );
}
