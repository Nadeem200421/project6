"use client";

import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { addToCart } from "../../redux/features/cartSlice";
import { addFavourite } from "../../redux/features/favouritesSlice";
import type { ItemType } from "../../data/marketplace";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Please login first to add to cart!");
      return;
    }
    dispatch(addToCart(item)); // ✅ item matches cartSlice type
  };

  const handleAddFavourite = () => {
    if (!isLoggedIn) {
      alert("Please login first to save favourites!");
      return;
    }
    dispatch(addFavourite(item)); // ✅ item matches favouritesSlice type
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <Link href={`/marketplace/${item.id}`}>
        <h2 className="text-lg font-semibold">
          {item.title}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          💰 ₹{item.price} &nbsp; | &nbsp; 📍 {item.location}
        </p>

        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 line-clamp-3">
          {item.description}
        </p>
      </Link>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="btn-primary px-3 py-1"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <button
          type="button"
          className="btn-secondary px-3 py-1"
          onClick={handleAddFavourite}
        >
          Save ❤️
        </button>
      </div>
    </Card>
  );
};

export default ItemCard;
