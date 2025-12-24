"use client";

import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
  };
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <Link href={`/events/${event.id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          📅 {event.date} &nbsp; | &nbsp; 📍 {event.location}
        </p>
        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 line-clamp-3">
          {event.description}
        </p>
      </Card>
    </Link>
  );
};

export default EventCard;
