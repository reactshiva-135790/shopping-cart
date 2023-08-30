import * as React from "react";
import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList"
import ProductCard from "../pages/ProductCard"

function RoutePage() {
  let element = useRoutes([
    {
      path: "/",
      element: <ProductList />,
    },
    { path: "/product/:id", element: <ProductCard /> },
  ]);

  return element;
}

export default RoutePage