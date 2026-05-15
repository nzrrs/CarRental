// Layouts 
import PublicLayout from "../pages/public/layout/PublicLayout";

// Pages
import HomePage from "../pages/public/publicPages/HomePage";
import AboutPage from "../pages/public/publicPages/AboutPage";

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
        }
    ]);

   return(
        <RouterProvider router={router}/>
    )
    
}