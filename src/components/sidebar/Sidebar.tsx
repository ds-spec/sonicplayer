import { MoonIcon, UserCircleIcon } from "@phosphor-icons/react";
import { sidebarIcons } from "../../utility/constants";

export default function Sidebar() {
  return (
    <div
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      className="flex fixed top-1/2 left-2.5 -translate-y-1/2 flex-col justify-center items-center gap-15 bg-[#d4d4d492] rounded-full py-5 px-4.5"
    >
      <div className="flex flex-col gap-10">
        {sidebarIcons.map(({ icon: Icon, key }) => (
          <Icon
            key={key}
            weight="fill"
            className="cursor-pointer hover:text-black text-black/60 transition-all duration-200 text-2xl"
          />
        ))}
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <UserCircleIcon
          weight="fill"
          className="cursor-pointer hover:text-black text-black/60 transition-all duration-200 text-2xl"
        />
        <MoonIcon
          weight="fill"
          className="cursor-pointer hover:text-black text-black/60 transition-all duration-200 text-2xl"
        />
      </div>
    </div>
  );
}
