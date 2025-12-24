"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import EventCard from "../components/events/EventCard";

export default function EventsPage() {
  const events = useSelector((state: RootState) => state.data.events);

  return (
    <div className="py-10 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Upcoming Events
      </h1>

      {events.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          No events available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
