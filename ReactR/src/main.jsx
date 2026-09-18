import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx"
import Resume from "./resume.jsx"
import Skills from "./skills.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
   {
     path: "contact",
    element: <Contact />,
     },
     {
      path: "resume",
      element: <Resume/>
     },
     {
      path :"user/:userid",
    element :<user/>   
    },
    {
      path:"skills",
      element:<Skills/>
    },
   
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);