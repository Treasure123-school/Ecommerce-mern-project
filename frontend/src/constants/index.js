import { facebookIcon, instagramIcon, shieldTickIcon, supportIcon, truckFastIcon, twitterIcon } from "../assets/icons";
import { bread, burger, chocolateCake, clubSandwich, coffee, donuts, frenchFries, friedChicken, fruitPlatter, grilledFish, hotDog, iceCream, jollofRice, orangeJuice, pancakes, pasta, pizza, ramen, salad, shawarmaWrap, smoothie, steak, sushi, tacos, waffles } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    imgURL: bread,
    name: "Bread",
    price: "$200.20",
  },
  {
    imgURL: burger,
    name: "Burger",
    price: "$210.20",
  },
  {
    imgURL: chocolateCake,
    name: "ChocolateCake",
    price: "$220.20",
  },
  {
    imgURL: clubSandwich,
    name: "ClubSandwich",
    price: "$230.20",
  },
];

export const reviews = [
  {
    imgURL: "customer1",
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
  },
  {
    imgURL: "customer2",
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
];


export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebookIcon, alt: "facebook logo" },
  { src: twitterIcon, alt: "twitter logo" },
  { src: instagramIcon, alt: "instagram logo" },
];