import user from "@/assets/imgs/user.png";
import HeartSvg from "@/assets/svg/HeartSvg";
import KebebSvg from "@/assets/svg/KebebSvg";
import { formatDate } from "@/utils/date";
import * as S from "./ProductItem.styles";

const ProductItem = ({ item }) => {
  const handleAddLike = () => {
    alert("로그인 후 사용 가능합니다.");
  };

  return (
    <S.ProductItemWrapper>
      <S.ProductItemImgWrapper>
        <img src={item.images[0]} alt={item.name} />
      </S.ProductItemImgWrapper>
      <S.ProductDescriptionWrapper>
        <S.ProductHeader>
          <div>
            <S.ProductTitle>{item.name}</S.ProductTitle>
            <S.ProductPrice>{item.price.toLocaleString()}원</S.ProductPrice>
          </div>
          <S.SettingButton>
            <KebebSvg />
          </S.SettingButton>
        </S.ProductHeader>
        <S.DescriptionBody>
          <div>
            <S.DescriptionTitle>상품 소개</S.DescriptionTitle>
            <S.ProductDescription>{item.description}</S.ProductDescription>
            <S.DescriptionTitle>상품 태그</S.DescriptionTitle>
            <S.TagWrapper>
              {item.tags?.map((tag) => (
                <S.Tag key={tag}>#{tag}</S.Tag>
              ))}
            </S.TagWrapper>
          </div>
          <S.SellerInfo>
            <S.SellerWrapper>
              <S.SellerImg src={user} alt="사용자 아바타" />
              <div>
                <S.SellerNickname>{item.ownerNickname}</S.SellerNickname>
                <S.SellerCreatedAt>
                  {formatDate(item.createdAt)}
                </S.SellerCreatedAt>
              </div>
            </S.SellerWrapper>
            <S.LikeTagWrapper>
              <S.LikeTag onClick={handleAddLike}>
                <HeartSvg />
                {item.favoriteCount}
              </S.LikeTag>
            </S.LikeTagWrapper>
          </S.SellerInfo>
        </S.DescriptionBody>
      </S.ProductDescriptionWrapper>
    </S.ProductItemWrapper>
  );
};

export default ProductItem;
