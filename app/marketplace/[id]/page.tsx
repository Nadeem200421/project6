"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
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
      <div className="py-10">
        <p className="text-red-500">Item not found.</p>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">
        {item.title}
      </h1>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        💰 ₹{item.price} &nbsp; | &nbsp; 📍 {item.location}
      </div>

      <p className="text-base leading-relaxed">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          className="btn-primary"
          onClick={() => dispatch(addToCart(item))}
        >
          Add to Cart
        </button>

        <button
          className="btn-secondary"
          onClick={() => dispatch(addFavourite(item))}
        >
          Save ❤️
        </button>
      </div>
    </div>
  );
}
