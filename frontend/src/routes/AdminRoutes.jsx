import Dashboard from "../pages/admin/adminPages/dashboard";
import ManageAgencies from "../pages/admin/adminPages/manageAgencies";
import ManageReservations from "../pages/admin/adminPages/manageReservation";
import ManageCars from "../pages/admin/adminPages/manageCars";
import ManageUsers from "../pages/admin/adminPages/manageUsers";
import AdminLayout from "../pages/admin/layout/adminLayout";
import AgencySignIn from "../pages/authentification/AgencySignIn.jsx";
import AgencyCreateAccount from "../pages/authentification/AgencyCreateAccount.jsx";
import AgencyForgotPassword from "../pages/authentification/AgencyForgotPassword.jsx";
import { createBrowserRouter , RouterProvider } from "react-router-dom";


export default function AdminRoutes() {

    const router = createBrowserRouter([
        {
            path: "/admin",
            element : AdminLayout ,
            children:[
                { index:true , element:<Dashboard />} ,
                { path:"admin/dashboard" , element:<Dashboard />} ,
                { path:"admin/agencies" , element:<ManageAgencies />} ,
                { path:"admin/cars" , element:<ManageCars />} ,
                { path:"admin/reservations" , element:<ManageReservations />} ,
                { path:"admin/users" , element:<ManageUsers />} ,
            ]
        },
        // Agency auth routes (standalone — no admin layout)
        { path: "/agency/login", element: <AgencySignIn /> },
        { path: "/agency/register", element: <AgencyCreateAccount /> },
        { path: "/agency/forgot-password", element: <AgencyForgotPassword /> },
    ])
    return(
        <RouterProvider router={router}/>
    )

}