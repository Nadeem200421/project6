"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ItemCard from "../components/marketplace/ItemCard";

export default function MarketplacePage() {
  const items = useSelector((state: RootState) => state.data.items);

  return (
    <div className="py-10 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Marketplace
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
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
