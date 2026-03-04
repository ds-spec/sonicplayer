import Library from "./components/music-library/library";
import Notch from "./components/notch/Notch";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="bg-[#FAFAF9] h-screen flex overflow-x-hidden">
      <Sidebar />
      <main className="mt-28 px-20">
        <Library />
      </main>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 flex-1 flex flex-col justify-start items-center">
        <Notch />
      </div>
    </div>
  );
}

export default App;
