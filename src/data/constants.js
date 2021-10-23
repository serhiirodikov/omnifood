import firstStep from "../images/app/app-screen-1.png";
import secondStep from "../images/app/app-screen-2.png";
import thirdStep from "../images/app/app-screen-3.png";

import logo1 from "../images/logos/business-insider.png";
import logo2 from "../images/logos/techcrunch.png";
import logo3 from "../images/logos/forbes.png";
import logo4 from "../images/logos/the-new-york-times.png";
import logo5 from "../images/logos/usa-today.png";

import meal1 from "../images/meals/meal-1.jpg";
import meal2 from "../images/meals/meal-2.jpg";

import ben from "../images/customers/ben.jpg";
import dave from "../images/customers/dave.jpg";
import hannah from "../images/customers/hannah.jpg";
import steve from "../images/customers/steve.jpg";

import gallery1 from "../images/gallery/gallery-1.jpg";
import gallery2 from "../images/gallery/gallery-2.jpg";
import gallery3 from "../images/gallery/gallery-3.jpg";
import gallery4 from "../images/gallery/gallery-4.jpg";
import gallery5 from "../images/gallery/gallery-5.jpg";
import gallery6 from "../images/gallery/gallery-6.jpg";
import gallery7 from "../images/gallery/gallery-7.jpg";
import gallery8 from "../images/gallery/gallery-8.jpg";
import gallery9 from "../images/gallery/gallery-9.jpg";
import gallery10 from "../images/gallery/gallery-10.jpg";
import gallery11 from "../images/gallery/gallery-11.jpg";
import gallery12 from "../images/gallery/gallery-12.jpg";
import { Apple, InfiIcon, Leaf, Pause } from "../icons";

export const howItData = [
  {
    step: "01",
    heading: "Tell us what you like (and what not)",
    image: firstStep,
    description:
      "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
  },
  {
    step: "02",
    heading: "Approve your weekly meal plan",
    image: secondStep,
    description:
      "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
  },
  {
    step: "03",
    heading: "Receive meals at convenient time\n",
    image: thirdStep,
    description:
      "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
  },
];

export const logos = [
  {
    image: logo1,
  },
  {
    image: logo2,
  },
  {
    image: logo3,
  },
  {
    image: logo4,
  },
  {
    image: logo5,
  },
];

export const meals = [
  {
    image: meal1,
    tags: ["VEGETARIAN"],
    title: "Japanese Gyozas",
    calories: 650,
    nutriScore: 74,
    rating: 4.9,
  },
  {
    image: meal2,
    tags: ["VEGAN", "PALEO"],
    title: "Avocado Salad",
    calories: 400,
    nutriScore: 92,
    rating: 4.8,
  },
];

export const worksWithAnyDiet = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low FODMAP",
  "Kid-friendly",
];

export const sectionMainTitle = {
  howItSection: {
    subTitle: "HOW IT WORKS",
    description: "Your daily dose of health in 3 simple steps",
  },
  mealsSection: {
    subTitle: "Meals",
    description: "Omnifood AI chooses from 5,000+ recipes",
  },
  testimonialsSection: {
    subTitle: "TESTIMONIALS",
    description: "Once you try it, you can't go back",
  },
  pricingSection: {
    subTitle: "PRICING",
    description: "Eating well without breaking the bank",
  },
};

export const testimonials = [
  {
    image: dave,
    feedback:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    name: "Dave Bryson",
  },
  {
    image: ben,
    feedback:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: "Ben Hadley",
  },
  {
    image: steve,
    feedback:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: "Steve Miller",
  },
  {
    image: hannah,
    feedback:
      "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    name: "Hannah Smith",
  },
];

export const gallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

export const prices = [
  {
    complete: false,
    title: "starter",
    price: 399,
    description: "per month. That's just $13 per meal!",
    list: [
      {
        available: true,
        details: "1 meal per day",
      },
      {
        available: true,
        details: "Order from 11am to 9pm",
      },
      {
        available: true,
        details: "Delivery is free",
      },
      {
        available: false,
        details: "Get access to latest recipes",
      },
    ],
  },
  {
    complete: true,
    title: "complete",
    price: 649,
    description: "per month. That's just $11 per meal!",
    list: [
      {
        available: true,
        details: "2 meals per day",
      },
      {
        available: true,
        details: "Order 24/7.",
      },
      {
        available: true,
        details: "Delivery is free",
      },
      {
        available: true,
        details: "Get access to latest recipes",
      },
    ],
  },
];

export const cookingTips = [
  {
    icon: InfiIcon(),
    title: "Never cook again!",
    description:
      "Our subscriptions cover 365 days per year, even including major holidays.",
  },
  {
    icon: Apple(),
    title: "Local and organic",
    description:
      "Our cooks only use local, fresh, and organic products to prepare your meals.",
  },
  {
    icon: Leaf(),
    title: "No waste!",
    description:
      "All our partners only use reusable containers to package all your meals.",
  },
  {
    icon: Pause(),
    title: "Pause anytime",
    description:
      "Going on vacation? Just pause your subscription, and we refund unused days.",
  },
];

export const footerDetails = [
  {
    title: "Account",
    details: ["Create account", "Sign in", "iOS app", "Android app"],
  },
  {
    title: "Company",
    details: ["About Omnifood", "For Business", "Cooking partners", "Careers"],
  },
  {
    title: "Resources",
    details: ["Recipe directory", "Help center", "Privacy & terms"],
  },
];
