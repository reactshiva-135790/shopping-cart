import * as React from "react";
import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList"
import ProductCard from "../pages/ProductCard"
import Category from "../pages/Category";

function RoutePage() {
  let element = useRoutes([
    {
      path: "/",
      element: <ProductList />,
      children: [
        {
          path: "category",
          element: <Category  />,
        },
      ]
    },
    { path: "/product/:id", element: <ProductCard /> },
  ]);

  return element;
}

export default RoutePage