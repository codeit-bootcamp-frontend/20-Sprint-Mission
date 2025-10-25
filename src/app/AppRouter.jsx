import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import FaqPage from "../pages/FaqPage";
import HomePage from "../pages/HomePage";
import ItemsPage from "../pages/ItemsPage";
import LoginPage from "../pages/LoginPage";
import PrivacyPage from "../pages/PrivacyPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />, // ✅ 레이아웃 그룹
    children: [
      { index: true, element: <HomePage /> },
      { path: "items", element: <ItemsPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "*", element: <div>404</div> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "*", element: <div>404</div> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
