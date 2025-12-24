"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = useSelector((state: RootState) =>
    state.data.events.find((e) => e.id === id)
  );

  if (!event) {
    return (
      <div className="py-10">
        <p className="text-red-500">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">
        {event.title}
      </h1>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        📅 {event.date} &nbsp; | &nbsp; 📍 {event.location}
      </div>

      <p className="text-base leading-relaxed">
        {event.description}
      </p>
    </div>
  );
}
