import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HOCState from "./components/HOCState.jsx";
import HOCCountry from "./components/HOCCountry.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/searchstates",
        element: <HOCState />,
      },
      {
        path: "/searchcounties",
        element: <HOCCountry />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
