// components/events/EventCard.tsx
"use client";

import Link from "next/link";
import { FC } from "react";
import { EventType } from "../../data/events";
import "../../styles/event-card.css";

interface EventCardProps {
  event: EventType;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <Link
      href={`/events/${event.id}`}
      className="event-card-link group"
      aria-label={`View details for ${event.title}`}
    >
      <div className="event-card">
        <div className="event-card-content">
          <h2 className="event-card-title">{event.title}</h2>

          <div className="event-card-meta">
            <span className="event-card-date">📅 {event.date}</span>
            <span className="event-card-separator">•</span>
            <span className="event-card-location">📍 {event.location}</span>
          </div>

          <p className="event-card-desc">{event.description}</p>

          <span className="event-card-cta">View Details →</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
