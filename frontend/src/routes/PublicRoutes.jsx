import PublicLayout from "../components/layout/PublicLayout";
import NoFooterLayout from "../components/layout/NoFooterLayout";

import HomePage from "../pages/public/home/Home";
import VehiclesPage from "../pages/public/vehicles/Vehicles";
import AboutPage from "../pages/public/about/About";

import SignIn from "../authentification/SignIn.jsx";
import CreateAccount from "../authentification/CreateAccount.jsx";
import ForgotPassword from "../authentification/ForgotPassword.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function PublicRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
    {
      path: "/vehicles",
      element: <NoFooterLayout />,
      children: [
        { index: true, element: <VehiclesPage /> },
      ],
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <CreateAccount />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
}