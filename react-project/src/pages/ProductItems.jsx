import { AllProducts } from "../components/AllProducts";
import { BestProducts } from "../components/BestProducts";
import { BlueButton } from "../components/BlueButton";
import { Dropdown } from "../components/Dropdown";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

export function ProductItems() {
  return (
    <div>
      <Header />
      <div className="w-full">
        <div className="lg:max-w-[1248px] p-[16px] md:p-[24px] mx-auto">
          <BestProducts />
          <AllProducts />
        </div>
      </div>
    </div>
  );
}
