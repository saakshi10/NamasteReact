import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = (props) => {
    const params = useParams();
    const { id } = params;

    const [restaurantDetails, setRestaurantDetails] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.901701231620061&lng=77.66445640618197&restaurantId=" +
                id +
                "&submitAction=ENTER"
        );
        const json = await data.json();

        setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);

        // const len = json?.data?.cards?.length;
        // if(len){
        //     setRestaurantMenu(json?.data?.cards[0]?.cards(len-1)?.groupedCard?.cardGroupMap.REGULAR?.cards
        // }

        console.log(json);
    }

    return (
        <div>
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurantDetails.name}</h2>
                <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} />
                <h5>{restaurantDetails.areaName}</h5>
            </div>

            <div className="menu">
                <h3>Menu: </h3>
                {/* {console.log(restaurantDetails?)} */}
            </div>
        </div>
    );
};

export default RestaurantMenu;
