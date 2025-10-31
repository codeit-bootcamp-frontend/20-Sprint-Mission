import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* gray */
    --gray900: #111827;
    --gray800: #1f2937;
    --gray700: #374151;
    --gray600: #4b5563;
    --gray500: #6b7280;
    --gray400: #9ca3af;
    --gray300: #d1d5db;
    --gray200: #e5e7eb;
    --gray100: #f3f4f6;
    --gray50: #f9fafb;

    /* blue */
    --blue100: #3692ff;
    --blue200: #1967d6;
    --blue300: #1251aa;
    --inactive-btn: #9ca3af;

    /* red */
    --error-red: #f74747;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-width: 375px;
    font-size: 10px;
    font-family: 'Pretendard', sans-serif;
    color: var(--gray700);
    line-height: 1.5;
  }

  body {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  fieldset {
    border: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    border: none;
    background: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;
