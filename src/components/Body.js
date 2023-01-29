import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { IMG_CDN_URL } from "../config";

/**
 *
 * REACT uses one way data binding
 *
 */

const Body = () => {
    // let searchText = "KFC";      Javascript local variable with default value

    /**
     *
     * useState HOOK and STATE VARIABLE
     *     Creating local state variable using useState Hook
     *     Hook is nothing but a javascript function
     *     default value of vairable is passed as a parameter to useState Hook
     *     return type of function is array where:
     *          - 1st variable is local state variable
     *          - 2nd variable is the function use to modify the state variable
     *     cannot modify state variable like we do in JS
     *
     *
     *  This is called two-way binding
     */

    const [searchText, setSearchText] = useState();
    // const [searchClicked, setSearchClicked] = useState("false");

    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <div className="home-page">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for restaurant"
                    className="search-bar"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <i
                    class="fa-solid fa-magnifying-glass search-icon"
                    onClick={() => {
                        const data = filterData(searchText);
                        setRestaurants(data);
                    }}
                ></i>

                {/* <button
                    onClick={() => {
                        // setSearchClicked(
                        //     searchClicked === "true" ? "false" : "true"
                        // );

                        // filterData and update restaurant list (via state)
                        const data = filterData(searchText);
                        setRestaurants(data);
                    }}
                >
                    Search
                </button> */}
                {/* <h1>{searchClicked}</h1> */}
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant.data.id}
                            {...restaurant.data}
                        />
                    );
                })}
            </div>
        </div>
    );
};

function filterData(searchText) {
    if (searchText == "") {
        return restaurantList;
    }

    const data = restaurantList.filter((restaurant) => {
        return restaurant.data.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
    });

    return data;
}

export default Body;
