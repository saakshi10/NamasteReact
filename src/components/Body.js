import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";
import { restaurantList } from "../config";
import useOnline from "../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

// rerender of component happens when the state variables or the props passed to componenet changes
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    const { user, setUser } = useContext(UserContext);

    // in the below example, restaurants is mapped with const list from config file, when the page is rendered we see old data of restaurants and then gets replaced by new data
    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.901701231620061&lng=77.66445640618197&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const restaurant_list_name = "restaurant_grid_listing";

        const restaurantCard = json?.data?.cards.find(
            (card) => card.card.card.id === restaurant_list_name
        );

        // optional chaining
        setAllRestaurants(
            restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        // initially set filetred restaurant with all restaurant
        setFilteredRestaurants(
            restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offine, please check your internet connection</h1>;
    }

    function filterData(searchText) {
        if (searchText == "") {
            return allRestaurants;
        }

        const data = allRestaurants.filter((restaurant) => {
            return restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
        });

        return data;
    }

    function goTo() {}

    // Conditional Rendering
    // if restaurants list is empty => Shimmer UI
    // if restaurants list has data => show actual UI

    // Early return - not rendering a component
    if (!allRestaurants) return null;

    // handle this in a better place
    // if (filteredRestaurants.length === 0)
    //     return <h1>No restaurant match your filter</h1>;

    return allRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="bg-pink-50">
            <div className="search-container p-5 my-4">
                <input
                    type="text"
                    placeholder="Search for restaurant"
                    className="search-bar rounded-tl-lg rounded-bl-lg border w-4/5 p-2"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);

                        const data = filterData(e.target.value);
                        setFilteredRestaurants(data);
                    }}
                />
                <i
                    className="fa-solid fa-magnifying-glass search-icon rounded-tr-lg rounded-br-lg border w-1/12 p-3 text-center bg-blue-800 text-white hover:bg-blue-600"
                    onClick={() => {
                        const data = filterData(searchText);
                        setFilteredRestaurants(data);
                    }}
                ></i>
            </div>

            <div className="search-container p-5 my-4">
                <input
                    type="text"
                    placeholder="Change user context"
                    className="search-bar rounded-tl-lg rounded-bl-lg border w-4/5 p-2"
                    value={user.name}
                    onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
                    }}
                />
            </div>

            <div className="restaurant-list flex flex-wrap justify-start">
                {filteredRestaurants.length === 0 ? (
                    <h1>No Restaurants</h1>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <Link
                            to={"/restaurant/" + restaurant.info.id}
                            key={"link" + restaurant.info.id}
                        >
                            <RestaurantCard
                                key={restaurant.info.id}
                                {...restaurant.info}
                            />
                        </Link>
                    ))
                )}

                {/* 
                    IMPORTANT NOTE :
                    ONLY JAVASCRIPT EXPRESSIONS CAN WORK INSIDE THIS RETURN BLOCK
                    let a = 1;    // its a JS statement not expression
                    to make it an expression use () brackets
                */}

                {/* long way to write */}
                {/* {filteredRestaurants.length == 0 && (
                    <h1>No matching restaurant found</h1>
                )}
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant.info.id}
                            {...restaurant.info}
                        />
                    );
                })} */}
            </div>
        </div>
    );
};

export default Body;
