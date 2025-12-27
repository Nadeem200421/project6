// data/events.ts

export interface EventType {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export const events: EventType[] = [
  {
    id: "1",
    title: "Community Meetup",
    date: "25 Dec 2025",
    location: "Town Hall",
    description: "Join local residents for networking and fun.",
  },
  {
    id: "2",
    title: "Art Fair",
    date: "30 Dec 2025",
    location: "Community Center",
    description: "Local artists showcase their work.",
  },
  {
    id: "3",
    title: "Charity Run",
    date: "5 Jan 2026",
    location: "City Park",
    description: "Participate in a 5km run to support local charities.",
  },
  {
    id: "4",
    title: "Food Festival",
    date: "10 Jan 2026",
    location: "Main Street",
    description: "Enjoy delicious food from local vendors and restaurants.",
  },
  {
    id: "5",
    title: "Tech Workshop",
    date: "15 Jan 2026",
    location: "Innovation Hub",
    description: "Learn basic web development and modern tech skills.",
  },
  {
    id: "6",
    title: "Music Night",
    date: "18 Jan 2026",
    location: "Open Air Theatre",
    description: "Live performances by local bands and singers.",
  },
  {
    id: "7",
    title: "Book Reading Club",
    date: "22 Jan 2026",
    location: "Public Library",
    description: "Discuss popular books with fellow reading enthusiasts.",
  },
  {
    id: "8",
    title: "Yoga & Wellness Camp",
    date: "25 Jan 2026",
    location: "Riverside Park",
    description: "Morning yoga session focused on health and mindfulness.",
  },
  {
    id: "9",
    title: "Startup Networking Event",
    date: "28 Jan 2026",
    location: "Co-working Space",
    description: "Connect with entrepreneurs, founders, and investors.",
  },
  {
    id: "10",
    title: "Cultural Dance Show",
    date: "1 Feb 2026",
    location: "Auditorium",
    description: "Experience traditional and modern dance performances.",
  },
];
