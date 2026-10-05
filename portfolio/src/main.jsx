import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Resume from "./Resume.jsx";
import Skills from "./Skills.jsx";

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
                path: "skills",
                element: <Skills />,
            },
            {
                path: "resume",
                element: <Resume />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);