import Library from "./components/music-library/library";
import Notch from "./components/notch/Notch";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div
      style={{
        background: "radial-gradient(circle at 10px 50px, #f9f8f5, #f5f5f4)",
        backgroundSize: "40vw 35vw",
        backgroundRepeat: "repeat",
        backgroundColor: "#fafaf9", 
      }}
      className="h-screen flex overflow-x-hidden"
    >
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
