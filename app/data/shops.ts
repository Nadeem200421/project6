export interface ShopType {
  id: string;
  name: string;
  location: string;
  hours: string;
  description: string;
}

export const shops: ShopType[] = [
  {
    id: "1",
    name: "Green Grocery",
    location: "Main Street",
    hours: "9 AM - 9 PM",
    description: "Fresh local produce and daily essentials.",
  },
  {
    id: "2",
    name: "Bakery Delight",
    location: "High Street",
    hours: "7 AM - 7 PM",
    description: "Freshly baked breads, cakes, and pastries.",
  },
  {
    id: "3",
    name: "Book Haven",
    location: "Library Lane",
    hours: "10 AM - 8 PM",
    description: "Wide collection of books, stationery, and gifts.",
  },
];
