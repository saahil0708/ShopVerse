import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layouts/Customer';
import HomePage from '../Pages/Customer/Home/HomePage';
import ProductPage from '../Pages/Customer/Home/ProductPage';
import ProductDetailPage from "../Components/DetailedProduct";
import CartPage from "../Pages/Customer/Cart";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductPage />,
      },
      {
        path: '/products/:productID',
        element: <ProductDetailPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}