import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/open/Home";
import ProductDetails from "../pages/open/ProductDetails";
import OpenLayout from "../layout/OpenLayout";
import NotFound from "../common/NotFound";
import PrivateLayout from "../layout/PrivateLayout";
import Dashboard from "../pages/private/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OpenLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: <ProductDetails />,
      },
    ],
    errorElement: <NotFound/>
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }, 
    ],
    errorElement: <NotFound/>
  },
]);

export default router;

//  01: 24