import App from "./App";
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";

export const routeTree = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export const router = createBrowserRouter(routeTree);
