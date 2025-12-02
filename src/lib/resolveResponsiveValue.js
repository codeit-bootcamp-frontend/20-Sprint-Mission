import { media } from "@/styles/media";
import { css } from "styled-components";

const resolveResponsiveValue = (map, value) => {
  // 문자열 형태 ("md")일 경우
  if (!value || typeof value === "string") {
    return map[value];
  }

  // 객체 형태 ({ mobile, tablet, desktop })일 경우
  const { mobile, tablet, desktop } = value;

  return css`
    ${map[desktop]}

    ${tablet &&
    css`
      @media ${media.tablet} {
        ${map[tablet]}
      }
    `}

    ${mobile &&
    css`
      @media ${media.mobile} {
        ${map[mobile]}
      }
    `}
  `;
};

export default resolveResponsiveValue;
