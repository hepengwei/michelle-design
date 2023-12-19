import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import ECommerceDesign from "pages/ECommerceDesign";
import GraphicDesign from "pages/GraphicDesign";
import UIDesign from "pages/UIDesign";

export const contentRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/eCommerceDesign",
    element: <ECommerceDesign />,
  },
  {
    path: "/graphicDesign",
    element: <GraphicDesign />,
  },
  {
    path: "/uiDesign",
    element: <UIDesign />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const showHeaderPaths = [
  "/",
  "/main",
  "/eCommerceDesign",
  "/graphicDesign",
  "/uiDesign",
];

const routes: RouteObject[] = [
  {
    path: "/*",
    element: <Home />,
  },
];

export default routes;
