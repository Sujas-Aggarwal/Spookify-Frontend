import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import App from "./app.jsx";

const router = createBrowserRouter([
  {
    path:"/404-not-found-error",
    element:<ErrorPage />,
  },
  {
    path: `/`,
    element: <Navigate to="/home" />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/:id`,
    element: <App />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
