import icHeart from "@/assets/ic_heart.png";
import icSearch from "@/assets/ic_search.png";
import AllProductSection from "@/components/items/AllProductSection";
import BestProductCard from "@/components/items/BestProductCard";
import MOCK from "@/MOCK.json";
import * as S from "./ItemsPage.styles";
export const ITEMS_DATA = {
  sections: {
    best: { title: "베스트 상품" },
    all: {
      title: "전체 상품",
      search: {
        src: icSearch,
        alt: "검색",
        searchPlaceholder: "검색할 상품을 입력해주세요",
      },
    },
  },
  actions: {
    addItem: "상품 등록하기",
    sortLabel: "정렬",
    like: {
      src: icHeart,
      alt: "좋아요",
    },
    priceUnit: "원",
  },
};

export const ITEMS_UI = {
  sortOptions: [
    { key: "recent", label: "최신순" },
    { key: "favorite", label: "좋아요순" },
  ],
  pageSize: 5,
  pagination: { siblingCount: 1, boundaryCount: 1 },
};

const ItemsPage = () => {
  return (
    <S.Main>
      <S.BestSection>
        <S.SubTitle>{ITEMS_DATA.sections.best.title}</S.SubTitle>
        <S.BestProductContainer>
          {MOCK.list.slice(0, 4).map((item) => (
            <BestProductCard
              key={item.id}
              item={item}
              like={ITEMS_DATA.actions.like}
              priceUnit={ITEMS_DATA.actions.priceUnit}
            />
          ))}
        </S.BestProductContainer>
      </S.BestSection>
      <S.AllSection>
        <AllProductSection data={MOCK.list} />
      </S.AllSection>
    </S.Main>
  );
};

export default ItemsPage;
