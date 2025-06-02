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
import { ContentContainer } from "./components/container/ContentContainer";

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
            element: (
              <ContentContainer>
                <Home />
              </ContentContainer>
            ),
          },
        ],
      },
      {
        element: <DefaultLayout />,
        children: [
          {
            path: "contact",
            element: (
              <ContentContainer>
                <Contact />
              </ContentContainer>
            ),
          },
          {
            path: "services",
            element: (
              <ContentContainer>
                <Services />
              </ContentContainer>
            ),
          },
          {
            path: "expertise",
            element: (
              <ContentContainer>
                <Expertise />
              </ContentContainer>
            ),
          },
          {
            path: "work",
            element: (
              <ContentContainer>
                <Work />
              </ContentContainer>
            ),
          },
          {
            path: "terms-and-conditions",
            element: (
              <ContentContainer>
                <TermsAndConditions />
              </ContentContainer>
            ),
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
