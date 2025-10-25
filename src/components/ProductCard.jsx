import placeholder from "../assets/placeholder.png";
import heart from "../assets/heart.png";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  // 가격 포맷팅 (1000 -> 1,000)
  const formatPrice = (price) => {
    return price.toLocaleString("ko-KR");
  };

  return (
    <div className={styles["best-product-item"]}>
      <div className={styles["best-product-item-image"]}>
        <img
          src={product.images?.[0] || placeholder}
          alt={product.name}
          onError={(e) => {
            e.target.src = placeholder;
          }}
        />
      </div>
      <div className={styles["best-product-item-info"]}>
        <p className={styles["best-product-item-title"]}>{product.name}</p>
        <p className={styles["best-product-item-price"]}>
          {formatPrice(product.price)}원
        </p>
        <div className={styles["best-product-item-like-container"]}>
          <img src={heart} alt="heart" />
          <p className={styles["best-product-item-like"]}>
            {product.favoriteCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
