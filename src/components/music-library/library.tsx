import RecentlyPlayed from "./recently-played";

export default function Library() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-normal">My Collection</h1>
        <p className="text-sm font-light text-neutral-400 leading-1">
          Be proud of your taste {"<3"}{" "}
        </p>
      </div>
      <div className="flex flex-col gap-5 pt-12">
        <RecentlyPlayed />
        {/* <Favourites />
        <Playlists /> */}
      </div>
    </div>
  );
}
