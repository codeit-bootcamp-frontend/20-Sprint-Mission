import defaultImage from "@/assets/panda-market.png";
import * as S from "./BestProductCard.styles";

const BestProductCard = ({ item, priceUnit, like }) => {
  return (
    <S.Container>
      <S.ProductImgBox>
        <S.ProductImg
          src={item.images}
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
        />
      </S.ProductImgBox>
      <S.ProductDescription>
        <S.ProductTitle>{item.name}</S.ProductTitle>
        <S.ProductPrice>
          {item.price}
          {priceUnit}
        </S.ProductPrice>
        <S.ProductFavoriteCount>
          <img src={like.src} alt={like.alt} />
          {item.favoriteCount}
        </S.ProductFavoriteCount>
      </S.ProductDescription>
    </S.Container>
  );
};

export default BestProductCard;
