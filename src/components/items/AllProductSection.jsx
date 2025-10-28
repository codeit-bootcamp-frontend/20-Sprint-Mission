import MOCK from "@/MOCK.json";
import { ITEMS_DATA, PAGINATION_ITEMS } from "@/pages/ItemsPage";
import AllProductCard from "./AllProductCard";
import * as S from "./AllProductSection.styles";

const AllProductSection = () => {
  return (
    <>
      <S.Nav>
        <S.SubTitle>{ITEMS_DATA.sections.all.title}</S.SubTitle>
        <S.SearchInputContainer>
          <img
            src={ITEMS_DATA.sections.all.search.src}
            alt={ITEMS_DATA.sections.all.search.alt}
          />
          <S.SearchInput
            placeholder={ITEMS_DATA.sections.all.search.searchPlaceholder}
          />
        </S.SearchInputContainer>
        <S.AddProductButton>
          {ITEMS_DATA.sections.all.addItem}
        </S.AddProductButton>
        <S.SortButton>
          {ITEMS_DATA.sections.all.sortOptions.favorite}
          <img src={ITEMS_DATA.sections.all.sortSrc} />
        </S.SortButton>
      </S.Nav>
      <S.AllProductContainer>
        {MOCK.list.map((item) => (
          <AllProductCard
            key={item.id}
            item={item}
            like={ITEMS_DATA.actions.like}
            priceUnit={ITEMS_DATA.actions.priceUnit}
          />
        ))}
      </S.AllProductContainer>
      <S.PageButtonContainer>
        <S.PageButton>
          <img
            src={PAGINATION_ITEMS.icLeft.src}
            alt={PAGINATION_ITEMS.icLeft.alt}
          />
        </S.PageButton>
        <S.PageButton $current={true}>1</S.PageButton>
        <S.PageButton>2</S.PageButton>
        <S.PageButton>3</S.PageButton>
        <S.PageButton>4</S.PageButton>
        <S.PageButton>5</S.PageButton>
        <S.PageButton>
          <img
            src={PAGINATION_ITEMS.icRigit.src}
            alt={PAGINATION_ITEMS.icRigit.alt}
          />
        </S.PageButton>
      </S.PageButtonContainer>
    </>
  );
};

export default AllProductSection;
