import { burger, chocolateCake, jollofRice, pizza } from "../assets/images";

export const promotions = [
  {
    eyebrow: "Weekend favourite",
    title: "Big flavour, better value",
    description: "Get 20% off your first burger order.",
    action: "Order burgers",
    image: burger,
    alt: "Juicy burger with fresh toppings",
    theme: "promo-card--orange",
  },
  {
    eyebrow: "Family dinner",
    title: "More to share",
    description: "Save ₦2,000 when you order a family meal.",
    action: "See family meals",
    image: jollofRice,
    alt: "A colourful plate of jollof rice",
    theme: "promo-card--green",
  },
  {
    eyebrow: "Sweet treat",
    title: "Dessert is always a good idea",
    description: "Add a slice of cake for just ₦1,500.",
    action: "Browse desserts",
    image: chocolateCake,
    alt: "Chocolate cake topped with cream",
    theme: "promo-card--plum",
  },
  {
    eyebrow: "Pizza night",
    title: "Make tonight a pizza night",
    description: "Two large pizzas, one delicious deal.",
    action: "Shop pizza",
    image: pizza,
    alt: "Fresh pizza with melted cheese",
    theme: "promo-card--navy",
  },
];