import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
   IMPORTS AND EXPORTS
    A) Default Import
        - Default import can be renamed
        import NewHeader from "./components/Header";
        - Or normally 
        import Header from "./components/Header";

    B)Named Import
        - Imported named should not be renamed
        - import { Title } from "./components/Header";

    WHEN FILE HAS BOTH DEFAULT AND NAMED EXPORTS
        import Header, { Title } from "./components/Header";

    IMPORTING MULTIPLE EXPORTS
        import * as Obj from "./components/Header";
        here we can extract Title from Obj now
        Title = Obj.Title

    // Files can have extension of jsx, in that case use import like Header.jsx

 */

/**
    Header
        - Logo
        - Nav Items (Right Side)
        - Cart

    Body
        - Search Bar
        - Restaurant List
            - Restaurant Card
                > Image
                > Name
                > Rating
                > Cusines
                
    Footer
        - Links
        - Copyright
        - Facebook / Instagram

 */

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/**
 *
 * INLINE STYLING IN REACT
 *
 */
const styleObj = {
    backgroundColor: "yellow",
};
const StylingBody = () => {
    return (
        <h4
            style={{
                backgroundColor: "red",
            }}
        >
            Body With Style
        </h4>
    );
};
