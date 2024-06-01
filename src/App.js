/**
 * Nested elements
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="new">I am h1 tag</h1>
 *      </div>
 * </div>
 **/
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Restaurantinfo from "./components/Restaurantinfo.js"; 
// import DummyRestInfo from "./components/DummyRestInfo.js"; 
const Main = () => {
    return (
        <div className="main">
            <Header  />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};
const routing = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId", // wE have to use :before
                element: <Restaurantinfo />
            }
        ],
        errorElement: <Error />
},
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routing} />);
