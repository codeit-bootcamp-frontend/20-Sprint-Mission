import { useState, useEffect } from "react";
import styles from "./BestSection.module.css";
import ProductCard from "./ProductCard";
import axios from "axios";

const BestSection = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [itemCount, setItemCount] = useState(4); // 표시할 개수
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 화면 크기 감지 (matchMedia 사용)
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 480px)");
    const tablet = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = () => {
      if (mobile.matches) {
        setItemCount(1); // 모바일
      } else if (tablet.matches) {
        setItemCount(2); // 태블릿
      } else {
        setItemCount(4); // 데스크톱
      }
    };

    // 초기 실행
    handleMediaChange();

    // 미디어 쿼리 리스너 등록
    mobile.addEventListener("change", handleMediaChange);
    tablet.addEventListener("change", handleMediaChange);

    // 클린업
    return () => {
      mobile.removeEventListener("change", handleMediaChange);
      tablet.removeEventListener("change", handleMediaChange);
    };
  }, []);

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

  const displayProducts = bestProducts.slice(0, itemCount); //렌더링시 개수 조절
  return (
    <>
      <div className={styles["best-container"]}>
        <div className={styles["best-title"]}>
          <p>베스트 상품</p>
        </div>
        <div className={styles["best-products"]}>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSection;
