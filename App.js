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

//const heading = <img src="https://namastedevprod.s3.ap-south-1.amazonaws.com/banner+and+logos/name.png"></img>;

//assignment2
// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const HeaderComponent = () =>(
<div className="main">
    <img src="https://namastedevprod.s3.ap-south-1.amazonaws.com/banner+and+logos/name.png"></img>
    <input type="search" id="search" placeholder="Search"></input>
    <i className="fa-sharp fa-solid fa-user"></i>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);