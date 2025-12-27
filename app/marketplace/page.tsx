"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ItemCard from "../components/marketplace/ItemCard";
import "../styles/market.css";

export default function MarketplacePage() {
  const items = useSelector((state: RootState) => state.data.items);

  return (
    <div className="marketplace-page py-10 px-4 sm:px-6 lg:px-12 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center">
        Marketplace
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          No marketplace items available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
