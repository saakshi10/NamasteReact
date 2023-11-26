import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutComponent from "./components/About";
import ErrorComponent from "./components/Error";
import ContactComponent from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <>
            <Header />
            {/* <Body />                // if path is /
            <AboutComponent />      // if path is /about
            <ContactComponent />    // if path is /contact */}
            {/* to do conditional rendering based on router use - Outlet component by react-router-dom */}
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    { path: "/", element: <AppLayout />, errorElement: <ErrorComponent /> },
    { path: "/about", element: <AboutComponent /> },
]);

// NESTED ROUTING
// HEADER and FOOTER intact - change body according to rout
// Make about page children of AppLayout - children - to create mutliple children of your route
const nestedAppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/about", element: <AboutComponent /> },
            { path: "/contact", element: <ContactComponent /> },
            { path: "/restaurant/:id", element: <RestaurantMenu /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={nestedAppRouter} />);
