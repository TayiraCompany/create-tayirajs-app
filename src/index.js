import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// PAGES::
import Home from './app/home';

// ROUTER::
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('AppRoot'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
