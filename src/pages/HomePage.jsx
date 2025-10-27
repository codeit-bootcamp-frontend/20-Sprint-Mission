import HeroSection from "@/components/home/HeroSection";
import * as S from "./HomePage.styles";

import part2Img from "@/assets/img_home_01.png";
import part3Img from "@/assets/img_home_02.png";
import part4Img from "@/assets/img_home_03.png";
import part5Img from "@/assets/img_home_bottom.png";
import part1Img from "@/assets/img_home_top.png";
import FeatureSection from "@/components/home/FeatureSection";

const HOME_CONTENT = {
  heroTop: {
    image: part1Img,
    imageAlt: "언덕위 판다",
    children: (
      <S.Wrap>
        <S.HeroTopTitle>일상의 모든 물건을 거래해보세요</S.HeroTopTitle>
        <S.Cta to="/items">구경하러 가기</S.Cta>
      </S.Wrap>
    ),
  },
  features: [
    {
      key: "p2",
      highlight: "Hot itme",
      title: "인기 상품을 확인해 보세요",
      description: (
        <>
          가장 HOT한 중고거래 물품을 <br /> 판다 마켓에서 확인해 보세요
        </>
      ),
      image: part2Img,
      imageAlt: "판다 이미지 1",
    },
    {
      key: "p3",
      highlight: "Search",
      title: "구매를 원하는 상품을 검색하세요",
      description: (
        <>
          구매하고 싶은 물품은 검색해서 <br /> 쉽게 찾아보세요
        </>
      ),
      image: part3Img,
      imageAlt: "판다 이미지 2",
      textFirst: true,
    },
    {
      key: "p4",
      highlight: "Register",
      title: "판매를 원하는 상품을 등록하세요",
      description: (
        <>
          어떤 물건이든 판매하고 싶은 상품을
          <br />
          쉽게 등록하세요
        </>
      ),
      image: part4Img,
      imageAlt: "판다 이미지 3",
    },
  ],
  heroBottom: {
    image: part5Img,
    imageAlt: "언덕위 판다",
    children: (
      <S.HeroBottomTitle>
        믿을 수 있는 <br />
        판다마켓 중고 거래
      </S.HeroBottomTitle>
    ),
  },
};

const HomePage = () => {
  const { heroTop, features, heroBottom } = HOME_CONTENT;

  return (
    <main>
      <HeroSection image={heroTop.image} imageAlt={heroTop.imageAlt}>
        {heroTop.children}
      </HeroSection>
      <S.FeatureWrap>
        {features.map((sec) => (
          <FeatureSection
            key={sec.key}
            highlight={sec.highlight}
            title={sec.title}
            description={sec.description}
            image={sec.image}
            imageAlt={sec.imageAlt}
            textFirst={sec.textFirst}
          />
        ))}
      </S.FeatureWrap>
      <HeroSection
        variant="bottom"
        image={heroBottom.image}
        imageAlt={heroBottom.imageAlt}
      >
        {heroBottom.children}
      </HeroSection>
    </main>
  );
};

export default HomePage;
