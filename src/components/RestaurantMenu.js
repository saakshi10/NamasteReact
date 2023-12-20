import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = (props) => {
    const params = useParams();
    const { id } = params;

    // custom hook - this hook is handling fetching and mapping of restaurant details
    const { restaurantDetails, restaurantMenu } = useRestaurant(id);

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
