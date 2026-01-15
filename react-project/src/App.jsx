import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductItems } from "./pages/ProductItems";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/items" element={<ProductItems />} />
      </Routes>
    </div>
  );
}

export default App;
