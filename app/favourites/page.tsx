"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import ItemCard from "../components/marketplace/ItemCard";
import ShopCard from "../components/shops/ShopCard";

export default function FavouritesPage() {
  const router = useRouter();
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const favourites = useSelector(
    (state: RootState) => state.favourites.items
  );
  const favouriteShops = useSelector(
    (state: RootState) => state.favourites.shops
  );

  if (!isLoggedIn) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 text-lg">
          Please login first to view your favourites.
        </p>
        <button
          className="mt-4 btn-primary"
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="py-10 space-y-10">
      {/* Favourite Shops */}
      <section className="space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Favourite Shops
        </h1>

        {favouriteShops.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            You have not saved any shops yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favouriteShops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        )}
      </section>

      {/* Favourite Marketplace Items */}
      <section className="space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Favourite Items
        </h1>

        {favourites.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            You have not saved any items yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favourites.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
