import { useEffect } from "react";
import { api } from "../api/axiosInstance";
import { useState } from "react";
import { Product } from "./Product";

export function BestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const res = await api.get("products?page=1&pageSize=4&orderBy=favorite");
    setProducts(res.data.list);
  }

  return (
    <div>
      <div className="text-[#111827] font-bold text-[20px] leading-[32px] mb-[16px]">
        베스트 상품
      </div>
      <div className="lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-[24px]">
        {products.length > 0 && <Product item={products[0]} />}
        {products.length > 1 && (
          <Product item={products[1]} className="hidden md:block" />
        )}
        {products.length > 2 && (
          <Product item={products[2]} className="hidden lg:block" />
        )}
        {products.length > 3 && (
          <Product item={products[3]} className="hidden lg:block" />
        )}
      </div>
    </div>
  );
}
