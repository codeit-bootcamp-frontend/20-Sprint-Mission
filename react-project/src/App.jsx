import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductItems } from "./pages/ProductItems";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/items">
              <button className="px-5 py-2 cursor-pointer font-bold text-white bg-blue-400 rounded-sm">
                중고마켓으로
              </button>
            </Link>
          }
        />
        <Route path="/items" element={<ProductItems />} />
      </Routes>
    </div>
  );
}

export default App;
