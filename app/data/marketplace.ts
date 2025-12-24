export interface ItemType {
  id: string;
  title: string;
  price: number;
  location: string;
  description: string;
}

export const items: ItemType[] = [
  {
    id: "1",
    title: "Used Bicycle",
    price: 3500,
    location: "City Center",
    description: "Well-maintained bicycle in good condition.",
  },
  {
    id: "2",
    title: "Laptop Dell",
    price: 25000,
    location: "Town Center",
    description: "Dell Inspiron 15, 8GB RAM, 512GB SSD.",
  },
  {
    id: "3",
    title: "Guitar Yamaha",
    price: 7000,
    location: "Music Street",
    description: "Acoustic guitar, barely used, excellent sound quality.",
  },
];
