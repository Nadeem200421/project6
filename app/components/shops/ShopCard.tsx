"use client";

import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";
import "../../styles/shop-card.css";

interface ShopCardProps {
  shop: {
    id: string;
    name: string;
    location: string;
    hours: string;
    description: string;
  };
}

const ShopCard: FC<ShopCardProps> = ({ shop }) => {
  return (
    <Link href={`/shops/${shop.id}`} className="shop-card-link">
      <Card className="shop-card">
        <div className="shop-card-header">
          <h2 className="shop-name">{shop.name}</h2>
        </div>

        <p className="shop-meta">
          <span>📍 {shop.location}</span>
          <span className="divider">•</span>
          <span>🕒 {shop.hours}</span>
        </p>

        <p className="shop-description">{shop.description}</p>

        <div className="shop-card-footer">
          <span className="view-details">View Shop →</span>
        </div>
      </Card>
    </Link>
  );
};

export default ShopCard;
