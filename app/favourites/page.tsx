"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import type { RootState } from "../redux/store";
import ItemCard from "../components/marketplace/ItemCard";
import ShopCard from "../components/shops/ShopCard";

import "../styles/favourites.css";

export default function FavouritesPage() {
  const router = useRouter();

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const favouriteItems = useSelector(
    (state: RootState) => state.favourites.items
  );

  const favouriteShops = useSelector(
    (state: RootState) => state.favourites.shops
  );

  // 🔐 Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, router]);

  // ⏳ Prevent UI flash before redirect
  if (!isLoggedIn) {
    return null;
  }

  return (
    <main className="favourites-page">
      {/* Favourite Shops */}
      <section className="favourites-section">
        <h1 className="section-title">Favourite Shops</h1>

        {favouriteShops.length === 0 ? (
          <div className="empty-state">
            No favourite shops yet.
          </div>
        ) : (
          <div className="grid shops-grid">
            {favouriteShops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        )}
      </section>

      {/* Favourite Items */}
      <section className="favourites-section">
        <h1 className="section-title">Favourite Items</h1>

        {favouriteItems.length === 0 ? (
          <div className="empty-state">
            No favourite items yet.
          </div>
        ) : (
          <div className="grid items-grid">
            {favouriteItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
