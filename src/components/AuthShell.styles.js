import { media } from "@/styles/media";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${media.mobile} {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  width: 640px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const LogoTitle = styled.h1`
  width: 396px;
  height: 132px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media ${media.mobile} {
    width: 198px;
    height: 66px;
    margin-bottom: 0px;
  }
`;

export const EaseLoginContainer = styled.div`
  width: 100%;
  padding: 16px 24px;
  margin-bottom: 24px;
  border-radius: 16px;
  background-color: #e6f2ff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: var(--gray800);

  ul {
    display: flex;
    gap: 16px;
  }
`;

export const EaseLoginItem = styled.li`
  width: 42px;
  height: auto;
  img {
    width: 42px;
    height: auto;
    display: block;
  }
`;

export const ToBottom = styled.div`
  color: var(--gray800);
  font-weight: 500;
  font-size: 1.4rem;

  a {
    color: var(--blue100);
    text-decoration: underline;
    margin-left: 4px;

    &:hover {
      color: var(--blue200);
    }
  }
`;
