import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import StarImages from "./components/StarImages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/startImages", element: <StarImages /> },
]);

export default router;
