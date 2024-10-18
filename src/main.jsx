import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { 
  AboutPage,
  ContactUsPage, 
  AppointmentPage, 
  LoginPage, 
  Dashboard, 
  Appointment, 
  ServiceProviders, 
  Administrators,
  Settings, } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "AboutPage",
    element: <AboutPage/>,
  },
  {
    path: "ContactUsPage",
    element: <ContactUsPage/>,
  },
  {
    path: "AppointmentPage",
    element: <AppointmentPage/>,
  },
  {
    path: "LoginPage",
    element: <LoginPage/>,
  },
  {
    path: "Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "Appointment",
    element: <Appointment/>,
  },
  {
    path: "ServiceProviders",
    element: <ServiceProviders/>,
  },
  {
    path: "Administrators",
    element: <Administrators/>,
  },
  {
    path: "Settings",
    element: <Settings/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);