import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Main from "pages/Main";

export const contentRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
];

const routes: RouteObject[] = [
  {
    path: "/*",
    element: <Home />,
  },
];

export default routes;
