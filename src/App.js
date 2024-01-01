import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/Error";
import ContactComponent from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import ProfileClass from "./components/About/ProfileClass";
import Shimmer from "./components/Shimmer";
import CartComponent from "./components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store/store";

// ALL lazy loaded components should be decared outside the Functional Componenet
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About/About"));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Saakshi Singhal",
        email: "saakshi@gmail.com",
    });

    return (
        <Provider store={store}>
            {/* context can be changed for a smaller sectoion of app */}
            <UserContext.Provider
                value={{
                    user: user,
                    setUser,
                }}
            >
                {/*
                    <Body />                // if path is /
                    <AboutComponent />      // if path is /about
                    <ContactComponent />    // if path is /contact 
                */}
                <Header />

                {/* to do conditional rendering based on router use - Outlet component by react-router-dom */}
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    { path: "/", element: <AppLayout />, errorElement: <ErrorComponent /> },
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
            { path: "/login", element: <LoginForm /> },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                ),
                children: [{ path: "profile", element: <ProfileClass /> }],
            },
            { path: "/contact", element: <ContactComponent /> },
            { path: "/restaurant/:id", element: <RestaurantMenu /> },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <CartComponent />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={nestedAppRouter} />);
