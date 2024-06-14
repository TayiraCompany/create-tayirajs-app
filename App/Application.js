import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from 'tayirajs-plugins/TayiraJs-translate';
import reportWebVitals from './reportWebVitals';

// PAGES::
import Home from './pages/home';

// ROUTER::
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('AppRoot'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
