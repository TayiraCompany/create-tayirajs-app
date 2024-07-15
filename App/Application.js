import React, { Suspense, lazy, memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18next";
import reportWebVitals from "./reportWebVitals";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// Lazy Loading for Home component
const Home = lazy(() => import("./pages/home"));

// :: STC
const Error = lazy(() => import("./Error"));

// Loading component
const Loading = memo(() => (
  <Suspense>
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  </Suspense>
));

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
]); 

const root = ReactDOM.createRoot(document.getElementById("AppRoot"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
);


reportWebVitals();
