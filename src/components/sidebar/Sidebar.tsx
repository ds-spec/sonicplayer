import { CarProfileIcon, MoonIcon } from "@phosphor-icons/react";
import { sidebarIcons } from "../../utility/constants";

export default function Sidebar() {
  return (
    <div className="flex fixed top-0 flex-col justify-center h-screen gap-15">
      <div className="flex flex-col gap-13 pl-8">
        {sidebarIcons.map(({ icon: Icon, key }) => (
          <Icon
            key={key}
            className="cursor-pointer hover:text-[#717171] text-[#a6a6a6] transition-all duration-200 text-xl"
          />
        ))}
      </div>
      <div className="flex flex-col gap-15 m-8">
        <CarProfileIcon className="cursor-pointer hover:text-[#717171] text-[#a6a6a6] transition-all duration-200 text-xl" />
        <MoonIcon className="cursor-pointer hover:text-[#717171] text-[#a6a6a6] transition-all duration-200 text-xl" />
      </div>
    </div>
  );
}
