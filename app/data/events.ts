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
];
