import PublicLayout from "../components/layout/PublicLayout";
import NoFooterLayout from "../components/layout/NoFooterLayout";

import HomePage from "../pages/public/home/Home";
import VehiclesPage from "../pages/public/vehicles/Vehicles";
import ContactPage from "../pages/public/contact/Contact";
import AgenciesPage from "../pages/public/agencies/Agencies";
import AboutPage from "../pages/public/about/About";
import CarDetails from "../pages/public/details/CarDetails";
import AgencyDetails from "@/pages/public/agencies/AgencyDetails";

import SignIn from "../pages/authentification/SignIn.jsx";
import CreateAccount from "../pages/authentification/CreateAccount.jsx";
import ForgotPassword from "../pages/authentification/ForgotPassword.jsx";

import AgencySignIn from "@/pages/authentification/AgencySignIn";
import AgencyCreateAccount from "@/pages/authentification/AgencyCreateAccount";
import AgencyForgotPassworda from "@/pages/authentification/AgencyForgotPassword";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function PublicRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
    {
      path: "/vehicles",
      element: <NoFooterLayout />,
      children: [
        { index: true, element: <VehiclesPage /> },
        { path: "car-details/:id", element: <CarDetails /> },
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
    {
     path: "/agency/login",
     element: <AgencySignIn />,
   },
   {
     path: "/agency/register",
     element: <AgencyCreateAccount />,
   },
   {
     path: "/agency/forgot-password",
     element: <AgencyForgotPassworda />,
   },
   {
      path: "/agencies",
      element: <NoFooterLayout />,
      children: [{ index: true, element: <AgenciesPage /> },{path :"/agencies/:id", element: <AgencyDetails />}],
    },
  ]);

  return <RouterProvider router={router} />;
}
