import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Home, Product } from "./router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
        <Product />
      </Layout>
    ),
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
