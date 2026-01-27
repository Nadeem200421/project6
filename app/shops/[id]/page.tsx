"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export default function ShopDetailsPage() {
  const { id } = useParams();

  const shop = useSelector((state: RootState) =>
    state.data.shops.find((s) => s.id === id)
  );

  if (!shop) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 text-lg font-medium">
          Shop not found.
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-10 space-y-8">
      {/* Shop Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
        {shop.name}
      </h1>

      {/* Shop Meta */}
      <div className="flex flex-wrap gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
        <span>📍 {shop.location}</span>
        <span>•</span>
        <span>🕒 {shop.hours}</span>
      </div>

      {/* Shop Description */}
      <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
        {shop.description}
      </p>
    </main>
  );
}
