import { createBrowserRouter } from "react-router-dom";

// Admin
import Dashboard from "../pages/admin/adminPages/dashboard";
import ManageAgencies from "../pages/admin/adminPages/manageAgencies";
import ManageReservations from "../pages/admin/adminPages/manageReservation";
import ManageCars from "../pages/admin/adminPages/manageCars";
import ManageUsers from "../pages/admin/adminPages/manageUsers";
import AdminLayout from "../pages/admin/layout/adminLayout";

// Public
import PublicLayout from "../components/layout/PublicLayout";
import NoFooterLayout from "../components/layout/NoFooterLayout";

import HomePage from "../pages/public/home/Home";
import VehiclesPage from "../pages/public/vehicles/Vehicles";
import AboutPage from "../pages/public/about/About";

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
]);

export default router;