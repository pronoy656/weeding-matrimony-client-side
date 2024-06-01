import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Home from "./Component/Home/Home";
import BioData from "./Component/BioData/BioData";
import AboutUs from "./Component/AboutUs/AboutUs";
import ContactUs from "./Component/ContactUs/ContactUs";
import DashBoard from "./Component/DashBoard/DashBoard";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import EditBioData from "./Component/UserDashBoard/EditBioData";
import ViewBioData from "./Component/UserDashBoard/ViewBioData";
import MyContReq from "./Component/UserDashBoard/MyContReq";
import FavouriteBioData from "./Component/UserDashBoard/FavouriteBioData";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bioData",
        element: <BioData></BioData>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: (
          <PrivateRoute>
            <ContactUs></ContactUs>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashBoard/editBioData",
        element: <EditBioData></EditBioData>,
      },
      {
        path: "/dashBoard/viewBioData",
        element: <ViewBioData></ViewBioData>,
      },
      {
        path: "/dashBoard/myContRequest",
        element: <MyContReq></MyContReq>,
      },
      {
        path: "/dashBoard/favouriteBioData",
        element: <FavouriteBioData></FavouriteBioData>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>
);
