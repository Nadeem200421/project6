"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import "../../styles/event-details.css";

export default function EventDetailsPage() {
  const { id } = useParams();

  const event = useSelector((state: RootState) =>
    state.data.events.find((e) => e.id === id)
  );

  if (!event) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 text-lg font-medium">Event not found.</p>
      </div>
    );
  }

  return (
    <main className="event-details-page max-w-3xl mx-auto py-10 px-4 space-y-6">
      {/* Event Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
        {event.title}
      </h1>

      {/* Event Meta */}
      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
        <span>📅 {event.date}</span>
        <span>•</span>
        <span>📍 {event.location}</span>
      </div>

      {/* Event Description */}
      <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
        {event.description}
      </p>
    </main>
  );
}
