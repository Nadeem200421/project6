"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ShopCard from "../components/shops/ShopCard";

export default function ShopsPage() {
  const shops = useSelector((state: RootState) => state.data.shops);

  return (
    <div className="py-10 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Local Shops
      </h1>

      {shops.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          No shops available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      )}
    </div>
  );
}
