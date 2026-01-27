"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { addToCart } from "../../redux/features/cartSlice";
import { addFavourite } from "../../redux/features/favouritesSlice";

export default function MarketplaceItemDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const item = useSelector((state: RootState) =>
    state.data.items.find((i) => i.id === id)
  );

  if (!item) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 text-lg font-medium">
          Item not found.
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
        {item.title}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
        <span>💰 ₹{item.price}</span>
        <span>•</span>
        <span>📍 {item.location}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
        {item.description}
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          className="btn-primary w-full sm:w-auto"
          onClick={() => dispatch(addToCart(item))}
        >
          Add to Cart
        </button>

        <button
          className="btn-secondary w-full sm:w-auto"
          onClick={() => dispatch(addFavourite(item))}
        >
          Save ❤️
        </button>
      </div>
    </main>
  );
}
