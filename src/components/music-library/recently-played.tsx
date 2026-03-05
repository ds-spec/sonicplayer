import { CaretLeftIcon, CaretRightIcon, PlayIcon } from "@phosphor-icons/react";
import { albums } from "../../utility/constants";

export default function RecentlyPlayed() {
  return (
    <>
      <div className="flex justify-between items-center pr-4">
        <h1 className="text-xl font-light">Recently Played</h1>
        <div className="flex items-center gap-2">
          <div className="bg-neutral-200 p-1.5 rounded-full">
            <CaretLeftIcon className="text-md text-black cursor-pointer" />
          </div>
          <div className="bg-neutral-200 p-1.5 rounded-full">
            <CaretRightIcon className="text-md text-black cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="overflow-visible">
        <div className="flex items-center gap-6 w-345 py-2 whitespace-nowrap overflow-x-auto">
          {albums.map((song, idx) => (
            <div
              key={idx}
              className="flex group flex-col border border-neutral-200 bg-[#e0dddd3a] shrink-0 gap-4 shadow-xl shadow-neutral-300/35 w-[320px] h-105 rounded-2xl px-4 py-3 cursor-pointer"
            >
              <div className="relative h-[calc(100%-60px)] w-full">
                <img
                  className="object-fill group-hover:blur-xs transition-all duration-300 h-full w-full rounded-xl"
                  src={song.image}
                  alt={song.title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2.5 flex items-center justify-center bg-[#ffffffa5] rounded-full">
                    <PlayIcon className="text-3xl text-white" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-normal tracking-tight leading-4 text-lg">
                  {song.title}
                </span>
                <p className="text-neutral-600 text-sm font-light tracking-tight">
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
