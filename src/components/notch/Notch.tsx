export default function Notch() {
  return (
    <div
      className="flex justify-center"
      style={{ filter: "drop-shadow(0 3px 12px rgba(0,0,0,0.2))" }}
    >
      <div className="flex justify-between px-5 items-center w-md h-12 bg-white drop-shadow-sm drop-shadow-white/80 notch">
        <h1 className="text-sm font-bold uppercase tracking-tight">
          sonic notch
        </h1>
        <h1 className="text-xs font-bold uppercase tracking-tight">
          loseless player
        </h1>
      </div>
    </div>
  );
}
