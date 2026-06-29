// Layouts 
import PublicLayout from "../components/layout/PublicLayout";
import ClientLayout from "../components/layout/ClientLayout";

// Pages
import HomePage from "../pages/public/home/Home";
import AboutPage from "../pages/public/about/About";
import ClientDashboard from "../pages/client/Dashboard";
import ClientReservations from "../pages/client/Reservations";
import ClientReservationDetails from "../pages/client/ReservationDetails";
import ClientNotifications from "../pages/client/Notifications";
import ClientProfile from "../pages/client/Profile";

// React Router
import { createBrowserRouter , RouterProvider } from "react-router-dom";

export default function PublicRoutes() {
    const router = createBrowserRouter([
        {
            // Public routes will be nested inside the PublicLayout
            path: "/",
            element: <PublicLayout />,
            children: [
                { index: true, element: <HomePage /> },
                { path: "/about", element: <AboutPage /> }
            ]
        },
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
        }
    ]);

   return(
        <RouterProvider router={router}/>
    )
    
}
