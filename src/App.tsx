import Library from "./components/music-library/library";
import Notch from "./components/notch/Notch";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="h-screen bg-linear-to-bl from-[#f2f2f0] to-[#f3f3f3] dark:bg-linear-to-b dark:from-[#1a1a1a] dark:to-[#121212] flex overflow-x-hidden">
      <div className="w-56">
        <Sidebar />
      </div>
      <main className="flex-1 pt-28 pl-8">
        <Library />
      </main>
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <Notch />
      </div>
    </div>
  );
}

export default App;
