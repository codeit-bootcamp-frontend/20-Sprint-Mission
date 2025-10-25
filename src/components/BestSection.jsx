import { useState, useEffect } from "react";
import styles from "./BestSection.module.css";
import ProductCard from "./ProductCard";
import axios from "axios";

const BestSection = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products"
        );
        console.log(response.data);

        // favoriteCount로 내림차순 정렬 후 상위 4개만 추출
        const sortedProducts = response.data.list
          .sort((a, b) => b.favoriteCount - a.favoriteCount)
          .slice(0, 4);

        setBestProducts(sortedProducts);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestProducts();
  }, []);
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;
  return (
    <>
      <div className={styles["best-container"]}>
        <div className={styles["best-title"]}>
          <p>베스트 상품</p>
        </div>
        <div className={styles["best-products"]}>
          {bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSection;
