export interface ItemType {
  id: string;
  title: string;
  price: number;
  location: string;
  description: string;
  image?: string | null; // optional, allow null
}

export const items: ItemType[] = [
  {
    id: "1",
    title: "Used Bicycle",
    price: 3500,
    location: "City Center",
    description: "Well-maintained bicycle in good condition.",
    image: "/images/bicycle.jpg",
  },
  {
    id: "2",
    title: "Dell Laptop",
    price: 25000,
    location: "Town Center",
    description: "Dell Inspiron 15, 8GB RAM, 512GB SSD.",
    image: "/images/laptop-dell.jpg",
  },
  {
    id: "3",
    title: "Yamaha Guitar",
    price: 7000,
    location: "Music Street",
    description: "Acoustic guitar, barely used, excellent sound quality.",
    image: "/images/guitar-yamaha.jpg",
  },
  {
    id: "4",
    title: "Wooden Study Table",
    price: 4500,
    location: "Green Avenue",
    description: "Solid wood study table with two drawers.",
    image: "/images/wooden-study-table.jpg",
  },
  {
    id: "5",
    title: "Samsung Smartphone",
    price: 18000,
    location: "Market Road",
    description: "Samsung Galaxy A series, 128GB storage, good condition.",
    image: "/images/smartphone-samsung.jpg",
  },
  {
    id: "6",
    title: "Office Chair",
    price: 3200,
    location: "Business Park",
    description: "Ergonomic office chair with adjustable height.",
    image: "/images/office-chair.jpg",
  },
  {
    id: "7",
    title: "Microwave Oven",
    price: 6000,
    location: "Residential Area",
    description: "Convection microwave, lightly used.",
    image: "/images/microwave-oven.jpg",
  },
  {
    id: "8",
    title: "Bookshelf",
    price: 2800,
    location: "Library Lane",
    description: "5-tier wooden bookshelf, compact and sturdy.",
    image: "/images/bookshelf.jpg",
  },
  {
    id: "9",
    title: "Washing Machine",
    price: 12000,
    location: "North Colony",
    description: "Fully automatic washing machine, 6.5kg capacity.",
    image: "/images/washing-machine.jpg",
  },
];
