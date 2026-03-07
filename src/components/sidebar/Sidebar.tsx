import { MoonIcon, SunIcon, UserCircleIcon } from "@phosphor-icons/react";
import { sidebarIcons } from "../../utility/constants";
import { useState } from "react";

export default function Sidebar() {
  const [mode, setMode] = useState("light");
  const toggleDarkMode = () => {
    if (document.documentElement.dataset.theme === "dark") {
      document.documentElement.dataset.theme = "light";
      setMode("light");
    } else {
      document.documentElement.dataset.theme = "dark";
      setMode("dark");
    }
  };

  return (
    <aside className="fixed top-1/2  left-3 -translate-y-1/2">
      <div className="flex flex-col justify-center items-center gap-12 bg-[#d4d4d492] rounded-full py-5 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-10">
          {sidebarIcons.map(({ icon: Icon, key }) => (
            <Icon key={key} weight="fill" className="icon-class" />
          ))}
        </div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <UserCircleIcon weight="fill" className="icon-class" />
          {mode === "dark" ? (
            <MoonIcon
              onClick={toggleDarkMode}
              weight="fill"
              className="icon-class"
            />
          ) : (
            <SunIcon
              onClick={toggleDarkMode}
              weight="fill"
              className="icon-class"
            />
          )}
        </div>
      </div>
    </aside>
  );
}
