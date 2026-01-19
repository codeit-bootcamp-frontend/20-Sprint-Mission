import { Link, Route, Routes } from "react-router-dom";
import { ProductItems } from "./pages/ProductItems";
import { AddProduct } from "./pages/AddProduct";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Link to="/items">
            <button
              type="button"
              className="px-5 py-2 cursor-pointer font-bold text-white bg-blue-400 rounded-sm"
            >
              중고마켓으로
            </button>
          </Link>
        }
      />
      <Route path="/items" element={<ProductItems />} />
      <Route path="/additem" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
