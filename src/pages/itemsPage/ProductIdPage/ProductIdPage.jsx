import { getProductDetail } from "@/api/productFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCommentSection from "./components/productCommentSection/ProductCommentSection";
import ProductItem from "./components/ProductItem";
import * as S from "./ProductIdPage.styles";

const ProductIdPage = () => {
  const { productId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductDetail(productId).then((res) => {
      setItem(res);
    });
  }, [productId]);

  if (item === null)
    return <S.Main>일치하는 상품 코드가 없습니다. "{productId}"</S.Main>;

  return (
    <S.Main>
      <ProductItem item={item} />
      <ProductCommentSection productId={productId} />
    </S.Main>
  );
};

export default ProductIdPage;
