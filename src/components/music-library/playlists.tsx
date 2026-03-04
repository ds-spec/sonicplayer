import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { albums } from "../../utility/constants";

export default function Playlists() {
  return (
    <>
      <div className="flex justify-between items-center pr-16">
        <h1 className="text-xl font-light">Playlists</h1>
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
              className="flex flex-col shrink-0 gap-4 shadow-xl shadow-neutral-300/50 w-[23vw] h-[45vh] bg-[#f2f2f2] rounded-2xl px-4 py-3"
            >
              <img
                className="object-cover h-[calc(100%-60px)] w-full rounded-xl"
                src={song.image}
                alt={song.title}
              />
              <div className="flex flex-col gap-2">
                <span className="font-normal tracking-tight leading-4 text-lg">
                  {song.title}
                </span>
                <p className="text-neutral-400 text-sm font-light tracking-tight">
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
