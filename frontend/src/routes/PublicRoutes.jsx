import PublicLayout from "../pages/public/layout/PublicLayout";

import HomePage from "../pages/public/publicPages/HomePage";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

export default function PublicRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout />,
            children: [
                { index: true, element: <HomePage /> },
            ]
        }
    ]);

   return(
        <RouterProvider router={router}/>
    )
    
}