"use client";

import Link from "next/link";
import { FC } from "react";
import Card from "../ui/Card";

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
    <Link href={`/shops/${shop.id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <h2 className="text-lg font-semibold">{shop.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          📍 {shop.location} &nbsp; | &nbsp; 🕒 {shop.hours}
        </p>
        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 line-clamp-3">
          {shop.description}
        </p>
      </Card>
    </Link>
  );
};

export default ShopCard;
