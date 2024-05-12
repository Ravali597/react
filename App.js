/**
 * Nested elements
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="new">I am h1 tag</h1>
 *      </div>
 * </div>
**/

const nestedEle = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1",{ id: "h1tag" },"I am an h1 tag"),
     React.createElement("h2",{ id: "h2tag" },"I am an h2 tag")])
);
console.log(nestedEle)

//const ele = React.createElement("h1",{id:"heading"},"Hello World !!");//creating html tag or creating html elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedEle);