import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// rerender of component happens when the state variables or the props passed to componenet changes
const Body = () => {
    const [searchText, setSearchText] = useState("");

    // default data to restaurants
    // const [restaurants, setRestaurants] = useState(restaurantList);

    // empty list of restaurant in initial state for creating shimmer effect
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    // called after react renders the UI
    // Parameter 1: A callback method which gets called after every re render, where we can write APIs to fetch data after initial page load
    // Parameter 2: Dependency Array - to stop it from calling again and again on every render pass in a dependency array into it as second parameteres
    // Dependency arrary => if empty then called only once
    // if this useEffect is to be called dependent on some variable, like search text, then pass it in the dependency array
    // ie, dep Array [searchText] => once after initial render + evrytime after re render (when search text changes)
    // pass multiple values [restaurants, searchText] - fired when either one of the value changes (if both are changing at same time - called only once)
    // if Parameter 2 is not passed, then it means no dependency and thus useeffect will be called after every re render

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
        <div className="home-page">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for restaurant"
                    className="search-bar"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);

                        const data = filterData(e.target.value);
                        setFilteredRestaurants(data);
                    }}
                />
                <i
                    className="fa-solid fa-magnifying-glass search-icon"
                    onClick={() => {
                        const data = filterData(searchText);
                        setFilteredRestaurants(data);
                    }}
                ></i>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.length === 0 ? (
                    <h1>No Restaurants</h1>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id}>
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
