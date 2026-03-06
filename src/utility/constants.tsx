import {
  CompassIcon,
  HeartIcon,
  HouseIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { Variants } from "motion";

export const sidebarIcons = [
  { icon: HouseIcon, key: "home" },
  { icon: MagnifyingGlassIcon, key: "search" },
  { icon: CompassIcon, key: "explore" },
];

export const albums = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
  },
  {
    title: "Wildest Dreams",
    artist: "Taylor Swift",
    image:
      "https://i.pinimg.com/736x/7c/b7/ba/7cb7ba57cc7d66d8f5d5a02f836ca52e.jpg",
  },
  {
    title: "Weekend Diaries",
    artist: "Elizabeth Oylsen",
    image:
      "https://i.pinimg.com/736x/e0/92/af/e092afb236ed55b74e628888d475da2a.jpg",
  },
  {
    title: "Midnight Revue",
    artist: "Taylor Swift",
    image:
      "https://i.pinimg.com/736x/9b/74/d3/9b74d3c92baf5e0eb2532996bf54c8ba.jpg",
  },
  {
    title: "Starboy",
    artist: "The Weeknd",
    image:
      "https://i.pinimg.com/736x/ed/3b/2e/ed3b2eff7b40b8df274d058b2a84b8a7.jpg",
  },
];

export const tileVariants:Variants = {
  initial: {
    y: 8,
    scale: 1.04,
  },
  hover: {
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.3,
    },
  },
};
