import { motion } from "motion/react";
import { Vibrant } from "node-vibrant/browser";
import { useEffect, useState } from "react";
import { albums } from "../../utility/constants";

export default function Notch() {
  const [palette, setPalette] = useState<any>(null);
  const path = albums[1]?.image;
  // Using builder

  useEffect(() => {
    console.log("paletteeee");
    Vibrant.from(path)
      .getPalette()
      .then((palette) => {
        setPalette(palette);
      });
  }, [path]);
  return (
    <div
      className="flex justify-center"
      style={{ filter: "drop-shadow(0 3px 12px rgba(0,0,0,0.2))" }}
    >
      <div className="relative flex justify-around px-2 items-center w-xs h-10 bg-[#1a1a1a] dark:bg-[#E8E8E8] drop-shadow-sm drop-shadow-white/80 dark:drop-shadow-black/80 notch">
        {/* <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
        </div>
        <h1 className="text-xs font-extralight text-white uppercase tracking-[.25em] dark:text-neutral-600">
          sonic notch
        </h1>
        <hr className="w-[1.5px] h-[20px] bg-neutral-400" />
        <h1 className="text-xs font-extralight text-white uppercase tracking-[.25em] dark:text-neutral-600">
          loseless player
        </h1> */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {/* <div className="w-5 h-5 p-4 bg-linear-to-b rounded-sm from-blue-300 to-blue-500"></div> */}
            <img
              className="w-6.5 h-6.5 rounded-sm"
              src={path}
              alt="Blinding Lights"
            />
            {/* <div className="flex flex-col">
              <span className="font-medium tracking-tight leading-4 text-sm dark:text-black text-white">
                Blinding Lights
              </span>
              <p className="text-xs font-light tracking-tight opacity-50  dark:text-neutral-600 text-neutral-500">
                The Weeknd
              </p>
            </div> */}
          </div>

          <div className="flex items-center gap-0.5 h-3">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  background: `linear-gradient(to top, ${palette?.Vibrant.hex}, ${palette?.DarkVibrant.hex})`,
                }}
                className="w-1 bg-white dark:bg-black rounded-full"
                animate={{
                  height: ["30%", "100%", "30%"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
