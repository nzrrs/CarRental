import { createBrowserRouter } from "react-router-dom";

// Gate
import GatePage from "../pages/gatePage";

// Layouts
import AdminLayout from "../pages/admin/layout/adminLayout";
import MainLayout from "@/components/layout/PublicLayout";
import NoFooterLayout from "@/components/layout/NoFooterLayout";
import ClientLayout from "@/components/layout/ClientLayout";

// Admin
import Dashboard from "../pages/admin/adminPages/dashboard";
import ManageAgencies from "../pages/admin/adminPages/manageAgencies";
import ManageReservations from "../pages/admin/adminPages/manageReservation";
import ManageCars from "../pages/admin/adminPages/manageCars";
import ManageUsers from "../pages/admin/adminPages/manageUsers";

// Public
import HomePage from "../pages/public/home/Home";
import AboutPage from "../pages/public/about/About";
import ContactPage from "../pages/public/contact/Contact";
import VehiclesPage from "../pages/public/vehicles/Vehicles";
import CarDetails from "../pages/public/details/CarDetails";
import AgenciesPage from "../pages/public/agencies/Agencies";
import AgencyDetails from "../pages/public/agencies/AgencyDetails";

// Auth
import SignIn from "../pages/authentification/SignIn";
import CreateAccount from "../pages/authentification/CreateAccount";
import ForgotPassword from "../pages/authentification/ForgotPassword";

import AgencySignIn from "../pages/authentification/AgencySignIn";
import AgencyCreateAccount from "../pages/authentification/AgencyCreateAccount";
import AgencyForgotPassword from "../pages/authentification/AgencyForgotPassword";

// Client
import ClientDashboard from "../pages/client/Dashboard";
import ClientReservations from "../pages/client/Reservations";
import ClientReservationDetails from "../pages/client/ReservationDetails";
import ClientNotifications from "../pages/client/Notifications";
import ClientProfile from "../pages/client/Profile";

const router = createBrowserRouter([
  // ================= GATE =================
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
  children: [
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },

    {
      path: "vehicles",
      element: <NoFooterLayout />,
      children: [
        { index: true, element: <VehiclesPage /> },
        { path: "car-details/:id", element: <CarDetails /> },
      ],
    },

    {
      path: "agencies",
      element: <NoFooterLayout />,
      children: [
        { index: true, element: <AgenciesPage /> },
        { path: ":id", element: <AgencyDetails /> },
      ],
    },
  ],
},

  // ================= USER AUTH =================
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

  // ================= CLIENT =================
  {
    path: "/client",
    element: <ClientLayout />,
    children: [
      { index: true, element: <ClientDashboard /> },
      { path: "dashboard", element: <ClientDashboard /> },
      { path: "reservations", element: <ClientReservations /> },
      { path: "reservations/:id", element: <ClientReservationDetails /> },
      { path: "notifications", element: <ClientNotifications /> },
      { path: "profile", element: <ClientProfile /> },
    ],
  },
]);

export default router;