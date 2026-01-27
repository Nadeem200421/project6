"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ItemCard from "../components/marketplace/ItemCard";
import "../styles/market.css";

export default function MarketplacePage() {
  const items = useSelector(
    (state: RootState) => state.data.items
  );

  return (
    <main className="marketplace-page">
      {/* Page Header */}
      <header className="marketplace-header">
        <h1 className="marketplace-title">
          Marketplace
        </h1>
        <p className="marketplace-subtitle">
          Buy, sell, and discover items from your local community
        </p>
      </header>

      {/* Marketplace Content */}
      {items.length === 0 ? (
        <div className="marketplace-empty">
          No marketplace items available.
        </div>
      ) : (
        <section className="marketplace-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </section>
      )}
    </main>
  );
}
