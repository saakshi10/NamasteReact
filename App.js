import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/img/logo.jpg";
import { restaurantList } from "./mock-data";

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

/**
 *
 *
 * REACT FRAGMENTS
 * JSX Expression must have only one parent element
 * if case 2 or more parents needed, use React.Fragment (<<React.Fragment> or <></>)
 * React.Fragment is like an empty tag
 * no styles or attributes can be passed to this empty tag
 *
 *
 */
const AppLayout = () => {
    return (
        <>
            {
                // <React.Fragment></React.Fragment> or <></>
            }
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const Logo = () => {
    return (
        <a href="/">
            <img className="logo" src={logo} alt="Logo" />
        </a>
    );
};

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// let restaurantList = restaurantData;
console.log(restaurantList);

/**
    props can be restructed into { restaurant }
    use {} instead of {props.restaurant.data?.name}

    FURTHER RESTRUCTURING OF PROPS
    const { name, cuisines, avgRating } = restaurant

    RESTRUCTURING ON THE FLY
    const
 */

/* 
const RestaurantCard = ({ restaurant }) => {
    const { name, cuisines, avgRating } = restaurant.data;

    return (
        <div className="card">
            <img
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    restaurant.data?.cloudinaryImageId
                }
            ></img>
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{restaurant.data?.lastMileTravelString}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard restaurant={restaurantList[0]} />
            <RestaurantCard restaurant={restaurantList[1]} />
            <RestaurantCard restaurant={restaurantList[2]} />
        </div>
    );
};

*/

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
    avgRating,
}) => {
    return (
        <div className="card">
            <img
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId
                }
            ></img>
            <div className="name">{name}</div>
            <div className="cuisines">{cuisines?.join(", ")}</div>
            <div className="details">
                <span className="distance">{lastMileTravelString}</span>
                <span className="rating">
                    <i className="fa-solid fa-star user-icon"></i> {avgRating}
                </span>
            </div>
        </div>
    );
};

/*
const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard
                name={restaurantList[0].data?.name}
                cloudinaryImageId={restaurantList[0].data?.cloudinaryImageId}
                cuisines={restaurantList[0].data?.cuisines}
                lastMileTravelString={
                    restaurantList[0].data?.lastMileTravelString
                }
                avgRating={restaurantList[0].data?.avgRating}
            />
            <RestaurantCard
                name={restaurantList[1].data?.name}
                cloudinaryImageId={restaurantList[1].data?.cloudinaryImageId}
                cuisines={restaurantList[1].data?.cuisines}
                lastMileTravelString={
                    restaurantList[1].data?.lastMileTravelString
                }
                avgRating={restaurantList[1].data?.avgRating}
            />
            <RestaurantCard {...restaurantList[2].data} />
            <RestaurantCard {...restaurantList[3].data} />
        </div>
    );
};
*/

// ITERATIVE WAY
// no key(not acceptable at all) <<<<<<<<<< index key(use only if anything else there) <<<<< unique key(best practice)
const Body = () => {
    return (
        <div className="restaurant-list">
            {restaurantList.map((restaurant) => {
                return (
                    <RestaurantCard
                        key={restaurant.data.id}
                        {...restaurant.data}
                    />
                );
            })}
        </div>
    );
};

const Footer = () => {
    return <h4>Footer</h4>;
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
    // return <h4 style={styleObj}>Body</h4>;
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

// CONFIG DRIVEN UI -  UI elements are rendered based on config sent by backend
// example- some offers in Kolkata but nit in bengaluru then we use some configs to show/hide a section
