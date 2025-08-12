import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Home, Shop, ProductDetails } from "./router";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <Layout>
            <Home />
          </Layout>
        ),
      },
      {
        path: "shop",
        element: (
          <Layout>
            <Shop />
          </Layout>
        ),
      },
      {
        path: "product-details/:productId",
        element: (
          <Layout>
            <ProductDetails />
          </Layout>
        ),
      },
    ],
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
