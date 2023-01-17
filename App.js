/***
 * 
 * 
 * 
 * Created A Server
 * HMR - Hot Module Replacement
 * File Warcher Algorithm - C++
 * Bundling
 * Minification
 * Cleaning the code
 * Manages Dev and Prdo Builds
 * Super fast build algorithms
 * Image Optimization
 * Caching while Development
 * Compression
 * Compatible with older versions of browsers
 * HTTPS on dev
 * Port Number
 * Consistent Hashing Algorithms
 * Zero Config
 * 
 * 
 * 
 */  

import React from 'react';
import ReactDOM from'react-dom/client';
// const heading = React.createElement("h1", {
//     "id":"title",
//     "className":"title",
//     "style":{
//         "textAlign":"center"
//     }
// }, "Namster Everyone from React Script");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// <div id="container">
//     <h1>Heading1</h1>
//     <h2>Heading2</h2>
// </div>
// I need to add above code in HTML Root

const heading1 = React.createElement("h1", { }, "Heading 1");
const heading2 = React.createElement("h2", { }, "Heading 2");

const container = React.createElement("div", { "id":"container" }, [
    heading1,
    heading2
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);