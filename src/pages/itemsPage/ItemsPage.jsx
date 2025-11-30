import api, { ENDPOINTS } from "@/api";
import useBreakpoint from "@/hooks/useBreakpoint";
import AllProductSection from "@/pages/itemsPage/components/AllProductSection";
import { useEffect, useMemo, useState } from "react";
import * as S from "./ItemsPage.styles";
import ProductItem from "./components/ProductItem";

export const PAGINATION_ITEMS = {
  currentPage: 1, // 시작할 페이지
  pageRange: 5, // 페이지 버튼 표시 개수
  itemsPerPage: {
    disktop: 10,
    tablet: 6,
    mobile: 4,
  },
};

const BestPerItems = {
  disktop: 4,
  tablet: 2,
  mobile: 1,
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

  const showCount = useMemo(() => {
    const { disktop, tablet, mobile } = BestPerItems;
    return bp === "mobile" ? mobile : bp === "tablet" ? tablet : disktop;
  }, [bp]);

  const bestProductdata = bestProductItems.slice(0, showCount);

  return (
    <S.Main>
      <S.BestSection>
        <S.SubTitle>베스트 상품</S.SubTitle>
        <S.BestProductContainer>
          {bestProductdata.map((item) => (
            <ProductItem size="lg" key={item.id} item={item} />
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
