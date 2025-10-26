import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./app/AppRouter";
import { GlobalStyle } from "./styles/GlobalStyle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <AppRouter />
  </StrictMode>
);
