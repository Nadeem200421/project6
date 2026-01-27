"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ShopCard from "../components/shops/ShopCard";
import "../styles/shops-page.css";

export default function ShopsPage() {
  const shops = useSelector((state: RootState) => state.data.shops);

  return (
    <main className="shops-page py-10 px-4 sm:px-6 lg:px-12">
      {/* Page Header */}
      <header className="shops-header text-center max-w-3xl mx-auto mb-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Local Shops
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Discover trusted shops near you
        </p>
      </header>

      {/* Shops Grid or Empty State */}
      {shops.length === 0 ? (
        <div className="shops-empty text-center text-gray-500 dark:text-gray-400 py-20">
          No shops available at the moment.
        </div>
      ) : (
        <section className="shops-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </section>
      )}
    </main>
  );
}
