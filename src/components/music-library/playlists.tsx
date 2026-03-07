"use client";
import { motion } from "motion/react";
import { playlists } from "../../utility/constants";

export default function Playlists() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-light dark:text-white text-black">
        Library
      </h1>
      <div className="flex flex-col divide-y divide-neutral-200/60 dark:divide-neutral-800/60 px-4">
        {playlists.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 py-4 px-4 cursor-pointer group hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 rounded-lg transition-colors duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 rounded-xl object-cover shadow-sm shadow-black/10 shrink-0 group-hover:shadow-md transition-shadow duration-200"
            />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-medium text-[15px] tracking-tight text-neutral-900 dark:text-white truncate">
                {item.title}
              </span>
              <span className="text-sm text-neutral-400 font-light tracking-tight dark:text-neutral-500">
                {item.artist} •{" "}
                {item.files === 1 ? "Single File" : `${item.files} files`}
              </span>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium mb-1">
                Quality
              </span>
              <span className="text-xs font-medium text-neutral-700 bg-neutral-200/70 px-2.5 py-1 rounded-md">
                {item.quality}
              </span>
            </div>
            <div className="flex flex-col items-end shrink-0 w-16">
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium mb-1">
                Format
              </span>
              <span className="text-sm font-semibold text-neutral-800 tracking-tight dark:text-white">
                {item.format}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
