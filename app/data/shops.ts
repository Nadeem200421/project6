export interface ShopType {
  id: string;
  name: string;
  category: string;
  location: string;
  address: string;
  hours: string;
  phone: string;
  rating: number;
  reviewsCount: number;
  description: string;
  isOpen: boolean;
}

export const shops: ShopType[] = [
  {
    id: "1",
    name: "Green Grocery",
    category: "Grocery",
    location: "Main Street",
    address: "12 Main Street, City Center",
    hours: "9 AM - 9 PM",
    phone: "+91 98765 43210",
    rating: 4.5,
    reviewsCount: 124,
    description:
      "Fresh local vegetables, fruits, dairy products, and daily household essentials sourced directly from farmers.",
    isOpen: true,
  },
  {
    id: "2",
    name: "Bakery Delight",
    category: "Bakery",
    location: "High Street",
    address: "45 High Street, Market Area",
    hours: "7 AM - 7 PM",
    phone: "+91 91234 56789",
    rating: 4.7,
    reviewsCount: 210,
    description:
      "Artisan bakery offering freshly baked breads, cakes, pastries, and custom-made desserts for all occasions.",
    isOpen: true,
  },
  {
    id: "3",
    name: "Book Haven",
    category: "Bookstore",
    location: "Library Lane",
    address: "8 Library Lane, Old Town",
    hours: "10 AM - 8 PM",
    phone: "+91 99887 66554",
    rating: 4.6,
    reviewsCount: 98,
    description:
      "A peaceful bookstore with a wide collection of novels, academic books, stationery, journals, and gift items.",
    isOpen: false,
  },
  {
    id: "4",
    name: "Tech World",
    category: "Electronics",
    location: "IT Park Road",
    address: "22 IT Park Road, Tech Zone",
    hours: "10 AM - 9 PM",
    phone: "+91 90123 45678",
    rating: 4.3,
    reviewsCount: 156,
    description:
      "Electronics and gadgets store offering smartphones, laptops, accessories, and reliable repair services.",
    isOpen: true,
  },
  {
    id: "5",
    name: "Fit Life Gym",
    category: "Fitness",
    location: "Wellness Avenue",
    address: "5 Wellness Avenue, South City",
    hours: "5 AM - 10 PM",
    phone: "+91 88990 11223",
    rating: 4.8,
    reviewsCount: 342,
    description:
      "Fully equipped gym with certified trainers, group workout sessions, yoga, and personal training programs.",
    isOpen: true,
  },
];
