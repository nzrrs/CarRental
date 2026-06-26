import { createBrowserRouter } from "react-router-dom";

// Admin
import Dashboard from "../pages/admin/adminPages/dashboard";
import ManageAgencies from "../pages/admin/adminPages/manageAgencies";
import ManageReservations from "../pages/admin/adminPages/manageReservation";
import ManageCars from "../pages/admin/adminPages/manageCars";
import ManageUsers from "../pages/admin/adminPages/manageUsers";
import AdminLayout from "../pages/admin/layout/adminLayout";

// Public
import MainLayout from "@/components/layout/PublicLayout";
import NoFooterLayout from "../components/layout/NoFooterLayout";
import AgenciesPage from "../pages/public/agencies/Agencies";
import AgencyDetails from "@/pages/public/agencies/AgencyDetails";
import AboutPage from "@/pages/public/about/About";
import ContactPage from "../pages/public/contact/Contact";


import HomePage from "../pages/public/home/Home";
import VehiclesPage from "../pages/public/vehicles/Vehicles";
import CarDetails from "../pages/public/details/CarDetails";

// Auth
import SignIn from "../pages/authentification/SignIn.jsx";
import CreateAccount from "../pages/authentification/CreateAccount.jsx";
import ForgotPassword from "../pages/authentification/ForgotPassword.jsx";

import AgencySignIn from "../pages/authentification/AgencySignIn.jsx";
import AgencyCreateAccount from "../pages/authentification/AgencyCreateAccount.jsx";
import AgencyForgotPassword from "../pages/authentification/AgencyForgotPassword.jsx";

// Gate Page
import GatePage from "../pages/gatePage";

const router = createBrowserRouter([
  // Landing Page
  {
    path: "/",
    element: <GatePage />,
  },

  // ================= ADMIN =================
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "agencies", element: <ManageAgencies /> },
      { path: "cars", element: <ManageCars /> },
      { path: "reservations", element: <ManageReservations /> },
      { path: "users", element: <ManageUsers /> },
    ],
  },

  // ================= PUBLIC =================
  {
    path: "/public",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "homePublic", element: <HomePage /> },
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

  // ================= AUTH =================
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

  // ================= AGENCY AUTH =================
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
    element: <AgencyForgotPassword />,
  },
  {
      path: "/agencies",
      element: <NoFooterLayout />,
      children: [{ index: true, element: <AgenciesPage /> },{path :"/agencies/:id", element: <AgencyDetails />}],
    },
]);

export default router;