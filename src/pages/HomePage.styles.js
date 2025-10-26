import { Link } from "react-router-dom";
import styled from "styled-components";

import { BaseButton } from "@/components/common.styles";
import { media } from "@/styles/media";
import { SubTitle } from "@/styles/typography";

export const Wrap = styled.div`
  width: 357px;
  margin-bottom: 100px;
  margin-right: 7px;

  @media ${media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 136px;
    width: 512px;
    margin-bottom: 211px;
    margin-right: 0;
  }
  @media ${media.mobile} {
    width: 240px;
    height: 156px;
    margin-bottom: 132px;
  }
`;

export const HeroTopTitle = styled(SubTitle)`
  width: 295px;
  margin-bottom: 32px;
  font-size: 4rem;

  @media ${media.tablet} {
    width: auto;
    margin-bottom: 24px;
  }

  @media ${media.mobile} {
    line-height: 140%;
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: 18px;
  }
`;

export const HeroBottomTitle = styled(SubTitle)`
  width: 295px;
  margin-bottom: 172px;
  margin-right: 69px;
  line-height: 140%;
  font-size: 4rem;

  @media ${media.tablet} {
    text-align: center;
    width: auto;
    margin-right: 0;
    margin-bottom: 217px;
  }

  @media ${media.mobile} {
    height: 90px;
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: 131px;
  }
`;

export const Cta = styled(BaseButton).attrs({ as: Link })`
  height: 56px;
  font-size: 2rem;
  border-radius: 40px;
  text-align: center;

  @media ${media.tablet} {
    width: 357px;
  }

  @media ${media.mobile} {
    width: 240px;
    height: 48px;
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
`;

export const FeatureWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 138px;

  @media ${media.tablet} {
    padding: 24px;
    padding-bottom: 56px;
    margin-bottom: 0;
    gap: 52px;
  }

  @media ${media.mobile} {
    padding: 52px 0 83px;
    gap: 40px;
  }
`;
