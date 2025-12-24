"use client";

import EventCard from "./components/events/EventCard";
import ShopCard from "./components/shops/ShopCard";
import ItemCard from "./components/marketplace/ItemCard";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

export default function HomePage() {
  const { events, shops, items } = useSelector(
    (state: RootState) => state.data
  );

  return (
    <div className="space-y-14 py-10">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Welcome to Your Local Community
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover events, support local shops, and explore marketplace listings
          in your area.
        </p>
      </section>

      {/* Events */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Shops */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Featured Local Shops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.slice(0, 3).map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </section>

      {/* Marketplace */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Marketplace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
