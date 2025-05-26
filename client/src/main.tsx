import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { Contact, Home, Work, Services, Expertise } from "./pages";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeLayout from "./layouts/HomeLayout";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        element: <DefaultLayout />,
        children: [
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "expertise",
            element: <Expertise />,
          },
          {
            path: "work",
            element: <Work />,
          },
          {
            path: "terms-and-conditions",
            element: <TermsAndConditions />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors />
  </StrictMode>
);
