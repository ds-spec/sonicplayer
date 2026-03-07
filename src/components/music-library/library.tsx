import Playlists from "./playlists";
import RecentlyPlayed from "./recently-played";

export default function Library() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1">
        <h1 className="text-5xl font-extralight dark:text-white text-black tracking-tight">
          My<span className="font-normal italic">Collection</span>
        </h1>
        <p className="text-sm font-light text-neutral-400 dark:text-neutral-500 leading-none">
          Be proud of your taste {"<3"}{" "}
        </p>
      </div>
      <div className="flex flex-col gap-16 pt-16">
        <RecentlyPlayed />
        <Playlists />
      </div>
    </div>
  );
}
