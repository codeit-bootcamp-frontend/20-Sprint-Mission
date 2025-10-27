import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BestSection from "./components/BestSection";
import AllSection from "./components/AllSection";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-container">
              <BestSection />
              <AllSection />
            </div>
          }
        />
        <Route
          path="/items"
          element={
            <div className="main-container">
              <BestSection />
              <AllSection />
            </div>
          }
        />
        <Route path="/additem" element={<div></div>} />
      </Routes>
    </>
  );
}

export default App;
