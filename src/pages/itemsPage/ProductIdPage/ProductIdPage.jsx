import { getProductDetail } from "@/api/productFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./components/ProductItem";
import * as S from "./ProductIdPage.styles";
const ProductIdPage = () => {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  console.log(item);

  useEffect(() => {
    getProductDetail(productId).then((res) => {
      setItem(res);
      console.log(res);
    });
  }, [productId]);

  if (item === null)
    return <S.Main>일치하는 상품 코드가 없습니다. "{productId}"</S.Main>;

  return (
    <S.Main>
      <ProductItem item={item} />
    </S.Main>
  );
};

export default ProductIdPage;
