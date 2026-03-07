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
      "https://imgs.search.brave.com/EEO2L-3eJQ05iWZ0w2y4RJVT5jwajOZ1Pvsz-7B0cSg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXls/b3Jzd2lmdHN3aXR6/ZXJsYW5kLmNoL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/LzU2ZDcwYjVjZTU0/ZGQ2OTExYWNlMDE0/MWZiZGMyZTVjLTEw/MjR4MTAyNC5wbmc",
  },
  {
    title: "Deewana",
    artist: "Sonu Nigam",
    image:
      "https://imgs.search.brave.com/S9D2n3se6ZKfveYES2GUKh5oIkpsiXqmoSsjizGXvXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lLnNu/bWMuaW8vaS82MDAv/cy8yMWZjNmFiOTM1/MmFjZTM2MjE0NjQz/MjcwMDg2M2Y1Ni80/NzU3OTM4L3NvbnUt/bmlnYW0tZGVld2Fu/YS1jb3Zlci1hcnQu/anBn",
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

export const tileVariants: Variants = {
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

export const playlists = [
  {
    title: "After Hours (Deluxe)",
    artist: "The Weeknd",
    files: 14,
    quality: "24-bit / 96kHz",
    format: "FLAC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
  },
  {
    title: "Starboy - Interstellar Mix",
    artist: "The Weeknd",
    files: 1,
    quality: "FLAC Lossless",
    format: "FLAC",
    image:
      "https://i.pinimg.com/736x/ed/3b/2e/ed3b2eff7b40b8df274d058b2a84b8a7.jpg",
  },
  {
    title: "Folklore (The Long Pond Sessions)",
    artist: "Taylor Swift",
    files: 17,
    quality: "MQA Master",
    format: "M4A",
    image:
      "https://i.pinimg.com/736x/9b/74/d3/9b74d3c92baf5e0eb2532996bf54c8ba.jpg",
  },
  {
    title: "Dawn FM (Collector's Edition)",
    artist: "The Weeknd",
    files: 16,
    quality: "Hi-Res Audio",
    format: "FLAC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png",
  },
  {
    title: "Midnights (3am Edition)",
    artist: "Taylor Swift",
    files: 20,
    quality: "Dolby Atmos",
    format: "ALAC",
    image:
      "https://i.pinimg.com/736x/7c/b7/ba/7cb7ba57cc7d66d8f5d5a02f836ca52e.jpg",
  },
];
