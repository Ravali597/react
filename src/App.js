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

const Main = () => {
    return (
        <div className="main">
            <Header  />
            <Body />
            {/* <Footer /> */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
