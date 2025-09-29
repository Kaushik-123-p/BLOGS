import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <Navbar />

      <main className="min-h-screen mt-8">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
