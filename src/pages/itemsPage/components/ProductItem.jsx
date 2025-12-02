import icHeart from "@/assets/imgs/ic_heart.png";
import defaultImage from "@/assets/imgs/panda-market.png";
import * as S from "./ProductItem.styles";

const ProductItem = ({ item, size = "md" }) => {
  return (
    <S.Container>
      <S.ProductImgBox size={size}>
        <S.ProductImg
          src={item.images}
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
        />
      </S.ProductImgBox>
      <S.ProductDescription>
        <S.ProductTitle>{item.name}</S.ProductTitle>
        <S.ProductPrice>{item.price.toLocaleString()}원</S.ProductPrice>
        <S.ProductFavoriteCount>
          <img src={icHeart} alt="좋아요" />
          {item.favoriteCount}
        </S.ProductFavoriteCount>
      </S.ProductDescription>
    </S.Container>
  );
};

export default ProductItem;
