import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FaqPage from "../pages/FaqPage";
import HomePage from "../pages/HomePage";
import ItemsPage from "../pages/ItemsPage";
import LoginPage from "../pages/LoginPage";
import PrivacyPage from "../pages/PrivacyPage";
import SignupPage from "../pages/SignupPage";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
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
