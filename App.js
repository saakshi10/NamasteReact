import React from "react";
import ReactDOM from "react-dom/client";

// WITHOUT JSX
// React.createElement => gives a JS Object => which is then converted to HTML DOM
const heading1 = React.createElement(
    "h1",
    {
        id: "heading1",
        key: "heading1",
    },
    "Heading 1 without JSX"
);
const heading2 = React.createElement(
    "h2",
    {
        id: "heading2",
        key: "heading2",
    },
    "Heading 2 without JSX"
);

const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

// WITH JSX
/**
 *
 *
 * if tag expands to more than one line, use round paranethesis ()
 * all atrributes follow camelCase ed tab-index attribute in HTML becomes tabIndex in JSX, similarly className
 *
 * This JSX code is understood by BABEL
 * Babel comes along with Parcel
 *
 * JSX => uses React.createElement behind scenes => gives a JS Object => which is then converted to HTML DOM
 * And here BABEL converts JSX to React.createElement
 *
 * Advantages of JSX
 * 1. Readability
 * 2. Maintainability
 * 3. Syntactic Support
 *
 *
 *
 * */

// this is a react element and yntax is called JSX expression
// REACT ELEMENT
const jsxHeading = (
    <h1 id="jsxHeading" key="jsx1">
        React Element Heading with JSX
    </h1>
);

// REACT COMPONENT
/**
 * 2 Types
 * - Functional   (NEW)
 * - Class Based  (OLD) covered at later point in course
 */

/**
 *
 * FUNCTIONAL COMPONENT - nothing but a javascript function
 * - Name starts with Captial Letter
 * - normal JS function
 * - multiple line, use paranthesis ()
 * - render Functional Component using HTML tag syntax like:
 *      root.render(<HeaderComponent />);
 * - to render React Element in React Component use {React_Element}
 * - To render another functional component inside React Component use :
 *      a) as HTML Tag <Functional_Component />
 *      b) as JS Function {Functional_Component()}
 * - Any JS code can be written in component within {}
 * 
 * COMPONENT COMPOSITION: Component inside a component
 * ie: Component composition is the name for passing components as props to other components, thus creating new components with other components
 *
 */

const HeaderComponent = () => {
    return (
        <div>
            {jsxHeading}
            <hr />
            <h1>Namsate Functional Component</h1>
            <h2>Heading in Functional Component</h2>
            <hr />
            <ShortHeaderComponent />
            <hr />
            {ShortHeaderComponent()}
        </div>
    );
};

// Shortcut for above code
const ShortHeaderComponent = () => (
    <div>
        <h1>2nd Functional Component</h1>
        <h2>Heading 2 in Functional Component</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading1);
// render Functional Component
root.render(<HeaderComponent />);
