"use client";

import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

import EventCard from "./components/events/EventCard";
import ShopCard from "./components/shops/ShopCard";
import ItemCard from "./components/marketplace/ItemCard";

import "./styles/home.css";

export default function HomePage() {
  const { events, shops, items } = useSelector(
    (state: RootState) => state.data
  );

  return (
    <main className="home-container">
      {/* =========================
          Hero Section
      ======================== */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Your Local Community</h1>
          <p>
            Discover events, support local shops, and explore marketplace listings
            in your area.
          </p>
        </div>
      </section>

      {/* =========================
          Upcoming Events Section
      ======================== */}
      <section className="section">
        <div className="section-header">
          <h2>Upcoming Events</h2>
        </div>

        <div className="card-grid events-grid">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* =========================
          Featured Shops Section
      ======================== */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Featured Local Shops</h2>
        </div>

        <div className="card-grid shops-grid">
          {shops.slice(0, 3).map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </section>

      {/* =========================
          Marketplace Section
      ======================== */}
      <section className="section">
        <div className="section-header">
          <h2>Marketplace</h2>
        </div>

        <div className="card-grid marketplace-grid">
          {items.slice(0, 4).map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
