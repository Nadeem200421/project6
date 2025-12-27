"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import ItemCard from "../components/marketplace/ItemCard";
import ShopCard from "../components/shops/ShopCard";
import "../styles/favourites.css";

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
      <div className="favourites-auth">
        <p>Please login first to view your favourites.</p>
        <button
          className="btn-primary"
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="favourites-page">
      {/* Favourite Shops */}
      <section className="favourites-section">
        <h1 className="section-title">Favourite Shops</h1>

        {favouriteShops.length === 0 ? (
          <div className="empty-state">
            You have not saved any shops yet.
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

        {favourites.length === 0 ? (
          <div className="empty-state">
            You have not saved any items yet.
          </div>
        ) : (
          <div className="grid items-grid">
            {favourites.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
