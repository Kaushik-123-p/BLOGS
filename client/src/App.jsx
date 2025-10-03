import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/app/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-screen-xl mx-auto px-2">
        <Navbar />

        <main className="min-h-screen mt-8">
          <Outlet />
        </main>

        <footer>Footer</footer>
      </div>
    </Provider>
  );
}

export default App;
