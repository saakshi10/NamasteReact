import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = (props) => {
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.901701231620061&lng=77.66445640618197&restaurantId=209207&submitAction=ENTER"
        );
        const json = data.json();
        console.log(json);
    }

    return (
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>Menu</h2>
        </div>
    );
};

export default RestaurantMenu;
