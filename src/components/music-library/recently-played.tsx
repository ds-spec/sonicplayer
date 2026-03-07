"use client";

import { CaretLeftIcon, CaretRightIcon, PlayIcon } from "@phosphor-icons/react";
import { albums, tileVariants } from "../../utility/constants";
import { motion } from "motion/react";

export default function RecentlyPlayed() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center pr-4">
          <h1 className="text-2xl font-light dark:text-white text-black">
            Recently Played
          </h1>
          <div className="flex items-center gap-2">
            <div className="bg-neutral-200 p-1.5 rounded-full">
              <CaretLeftIcon className="text-md text-black cursor-pointer" />
            </div>
            <div className="bg-neutral-200 p-1.5 rounded-full">
              <CaretRightIcon className="text-md text-black cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 w-345 py-2 whitespace-nowrap overflow-y-auto overflow-x-auto">
          {albums.map((song, idx) => (
            <div
              key={idx}
              className="flex group flex-col shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-[#ececece9] dark:bg-[#1a1a1a] shrink-0 gap-4 w-[320px] rounded-2xl p-4 cursor-pointer"
            >
              <div className="relative w-full overflow-hidden rounded-xl shadow-md shadow-black/10">
                <img
                  className="object-cover group-hover:brightness-75 group-hover:scale-105 transition-all duration-300 ease-out aspect-square"
                  src={song.image}
                  alt={song.title}
                />
                <motion.div
                  variants={tileVariants}
                  initial="initial"
                  whileHover="hover"
                  className="absolute play-icon inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="p-2.5 flex items-center justify-center bg-white/90 rounded-full">
                    <PlayIcon weight="fill" className="text-3xl text-black" />
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium tracking-tight leading-4 text-md dark:text-white text-black">
                  {song.title}
                </span>
                <p className="text-neutral-500 text-sm font-light tracking-tight opacity-50 dark:text-neutral-400">
                  {song.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
