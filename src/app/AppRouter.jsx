import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import FaqPage from "../pages/FaqPage";
import HomePage from "../pages/HomePage";
import ItemsPage from "../pages/ItemsPage";
import LoginPage from "../pages/LoginPage";
import PrivacyPage from "../pages/PrivacyPage";
import SignupPage from "../pages/SignupPage";
import { PATH } from "./router";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATH.ITEMS, element: <ItemsPage /> },
      { path: PATH.FAQ, element: <FaqPage /> },
      { path: PATH.PRIVACY, element: <PrivacyPage /> },
      { path: "*", element: <div>404</div> },
    ],
  },
  { path: `${PATH.LOGIN}`, element: <LoginPage /> },
  { path: `${PATH.SIGNUP}`, element: <SignupPage /> },
  { path: "*", element: <div>404</div> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
