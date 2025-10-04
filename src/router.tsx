import App from "./App";
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import { lazy } from "react";

const Detail = lazy(() => import("./pages/DetailPage"));

export const routeTree = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "detail/:name",
        element: <Detail />,
      },
    ],
  },
];

export const router = createBrowserRouter(routeTree);
