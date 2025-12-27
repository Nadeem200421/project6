"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { addToCart } from "../../redux/features/cartSlice";
import { addFavourite } from "../../redux/features/favouritesSlice";
import type { ItemType } from "../../data/marketplace";
import "../../styles/item-card.css";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Please login first to add to cart!");
      return;
    }
    dispatch(addToCart(item));
  };

  const handleAddFavourite = () => {
    if (!isLoggedIn) {
      alert("Please login first to save favourites!");
      return;
    }
    dispatch(addFavourite(item));
  };

  return (
    <div className="item-card">
      <Link href={`/marketplace/${item.id}`} className="item-link">
        <div className="item-image-wrapper">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="item-image"
            />
          ) : (
            <div className="item-placeholder">
              <p>No Image Available</p>
            </div>
          )}
        </div>

        <div className="item-content">
          <h2 className="item-title">{item.title}</h2>
          <p className="item-meta">
            <span>💰 ₹{item.price}</span> | <span>📍 {item.location}</span>
          </p>
          <p className="item-desc">{item.description}</p>
        </div>
      </Link>

      <div className="item-actions">
        <button className="btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="btn-secondary" onClick={handleAddFavourite}>
          Save ❤️
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
