import React, { useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  AboutPage,
  ContactUsPage, 
  AppointmentPage, 
  LoginPage, 
  Dashboard, 
  Appointment, 
  ServiceProviders, 
  Administrators,
  Settings,
  AddServiceProvider,
  EditServiceProvider,
  ForgotPassword,
} from "./pages";
import EditSPForm from './components/EditSPForm.jsx';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "AboutPage",
    element: <AboutPage />,
  },
  {
    path: "ContactUsPage",
    element: <ContactUsPage />,
  },
  {
    path: "AppointmentPage",
    element: <AppointmentPage />,
  },
  {
    path: "LoginPage",
    element: <LoginPage />,
  },
  {
    path: "ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "Dashboard",
    element: <ProtectedRoute element={<Dashboard />} />, 
  },
  {
    path: "Appointment",
    element: <ProtectedRoute element={<Appointment />} />, 
  },
  {
    path: "ServiceProviders",
    element: <ProtectedRoute element={<ServiceProviders />} />, 
  },
  {
    path: "AddServiceProvider",
    element: <ProtectedRoute element={<AddServiceProvider />} />, 
  },
  {
    path: "EditServiceProvider/:id",
    element: <ProtectedRoute element={<EditServiceProvider />} />, 
  },
  {
    path: "Administrators",
    element: <ProtectedRoute element={<Administrators />} />, 
  },
  {
    path: "Settings",
    element: <ProtectedRoute element={<Settings />} />, 
  },
  {
    path: "EditSPForm",
    element: <ProtectedRoute element={<EditSPForm />} />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
