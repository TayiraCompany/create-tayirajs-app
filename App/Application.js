import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "tayirajs-plugins/TayiraJs-translate";
import reportWebVitals from "./reportWebVitals";

// Lazy Loading for Home component
const Home = lazy(() => import("./pages/home"));

// Loading component
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("AppRoot"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
