import AddItemPage from "@/pages/addItemPage/AddItemPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import FaqPage from "../pages/FaqPage";
import HomePage from "../pages/homePage/HomePage";
import ItemsPage from "../pages/itemsPage/ItemsPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PrivacyPage from "../pages/PrivacyPage";
import SignupPage from "../pages/signupPage/SignupPage";
import { PATH } from "./router";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATH.ITEMS, element: <ItemsPage /> },
      { path: PATH.ADDITEM, element: <AddItemPage /> },
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
