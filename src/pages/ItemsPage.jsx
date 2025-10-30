import api, { ENDPOINTS } from "@/api";
import icLeftArrow from "@/assets/arrow_left.png";
import icRightArrow from "@/assets/arrow_right.png";
import icArrowDown from "@/assets/ic_arrow_down.png";
import icHeart from "@/assets/ic_heart.png";
import icSearch from "@/assets/ic_search.png";
import AllProductSection from "@/components/items/AllProductSection";
import BestProductCard from "@/components/items/BestProductCard";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useEffect, useState } from "react";
import * as S from "./ItemsPage.styles";

export const ITEMS_DATA = {
  sections: {
    best: {
      title: "베스트 상품",
      itemsPerPage: {
        disktop: 4,
        tablet: 2,
        mobile: 1,
      }, // 한 페이지당 아이템 수
    },
    all: {
      title: "전체 상품",
      search: {
        src: icSearch,
        alt: "검색",
        searchPlaceholder: "검색할 상품을 입력해주세요",
      },
      itemsPerPage: {
        disktop: 10,
        tablet: 6,
        mobile: 4,
      }, // 한 페이지당 아이템 수
      addItem: "상품 등록하기",
      sort: {
        modalRootId: "sortModal",
        options: [
          { text: "최신순", value: "recent" },
          { text: "좋아요순", value: "favorite" },
        ],
        src: icArrowDown,
      },
    },
  },
  actions: {
    like: {
      src: icHeart,
      alt: "좋아요",
    },
    priceUnit: "원",
  },
};

export const PAGINATION_ITEMS = {
  icLeft: {
    src: icLeftArrow,
    alt: "왼쪽 버튼",
  },
  icRigit: {
    src: icRightArrow,
    alt: "오른쪽 버튼",
  },
  currentPage: 1, // 시작할 페이지
  pageRange: 5, // 페이지 버튼 표시 개수
};

const ItemsPage = () => {
  const [bestProductItems, setBestProductItems] = useState([]);
  const bp = useBreakpoint();

  useEffect(() => {
    const parm = {
      params: {
        page: 1,
        pageSize: 4,
        orderBy: "favorite",
      },
    };

    (async () => {
      const getBestProductItems = await api.get(ENDPOINTS.products, parm);

      setBestProductItems(getBestProductItems.list);
    })();
  }, []);

  const disktop = ITEMS_DATA.sections.best.itemsPerPage.disktop;
  const tablet = ITEMS_DATA.sections.best.itemsPerPage.tablet;
  const mobile = ITEMS_DATA.sections.best.itemsPerPage.mobile;

  const showCount =
    bp === "mobile" ? mobile : bp === "tablet" ? tablet : disktop;
  const bestProductdata = bestProductItems.slice(0, showCount);

  return (
    <S.Main>
      <S.BestSection>
        <S.SubTitle>{ITEMS_DATA.sections.best.title}</S.SubTitle>
        <S.BestProductContainer>
          {bestProductdata.map((item) => (
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
        <AllProductSection />
      </S.AllSection>
    </S.Main>
  );
};

export default ItemsPage;
