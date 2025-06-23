import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layouts/Customer';
import HomePage from '../Pages/Customer/HomePage';
import Product from "../Pages/Customer/Product";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  // Navbar + Footer will appear on all child routes
    children: [
      {
        path: '/',
        element: <HomePage />,  // Homepage content
      },
      {
        path: '/products',
        element: <Product />,  // Product page content
      },
      // Add more routes here
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}