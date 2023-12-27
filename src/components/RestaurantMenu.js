import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = (props) => {
    const params = useParams();
    const { id } = params;

    const { user } = useContext(UserContext);

    // custom hook - this hook is handling fetching and mapping of restaurant details
    const { restaurantDetails, restaurantMenu } = useRestaurant(id);

    return (
        <div>
            <h1 className="font-bold italic m-2">
                Hi, {user.name}, what would you like to eat
            </h1>
            <div className="border-2 m-2 p-3 rounded-md">
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurantDetails.name}</h2>
                <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} />
                <h5>{restaurantDetails.areaName}</h5>
            </div>

            <div className="menu border-2 m-2 p-3 rounded-md">
                <h3>Menu: </h3>
                {restaurantMenu?.length <= 0 ? (
                    <Shimmer />
                ) : (
                    // <div>test data</div>
                    restaurantMenu.map((menuItem) => {
                        return (
                            <ul
                                className="category-title"
                                key={"menu-" + menuItem.title}
                            >
                                {menuItem.title}
                                {/* display sub items */}
                                {menuItem?.itemCards?.map((item) => {
                                    return (
                                        <li
                                            key={"item-" + item.card.info.id}
                                            className="item-title"
                                        >
                                            {item?.card?.info?.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })
                )}
                {/* {console.log(restaurantDetails?)} */}
            </div>
        </div>
    );
};

export default RestaurantMenu;
