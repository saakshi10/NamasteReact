import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { addItems } from "../utils/store/cartSlice";
import UserContext from "../utils/UserContext";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = (props) => {
    const params = useParams();
    const { id } = params;

    const { user } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    // custom hook - this hook is handling fetching and mapping of restaurant details
    const { restaurantDetails, restaurantMenu } = useRestaurant(id);

    const handleAddItem = (item) => {
        dispatch(addItems(item));
        console.log(cartItems);
    };

    const isItemadded = (item) => {
        return cartItems.find((x) => {
            return x.card.info.name === item.card.info.name;
        });
    };

    return (
        <div>
            <h1 className="font-bold italic m-2">
                Hi, {user.name}, what would you like to eat
                {restaurantMenu.length} items in the menu
            </h1>

            <div className="flex">
                <div
                    className="border-2 m-2 p-3 rounded-md"
                    data-testid="restaurant-info"
                >
                    <h1>Restaurant id: {id}</h1>
                    <h2>{restaurantDetails.name}</h2>
                    <img
                        src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}
                    />
                    <h5>{restaurantDetails.areaName}</h5>
                </div>

                <div className="menu border-2 m-2 p-3 rounded-md grow">
                    {restaurantMenu?.length <= 0 ? (
                        <Shimmer />
                    ) : (
                        restaurantMenu.map((menuItem) => {
                            return (
                                <ul
                                    data-testid="menu-list"
                                    className="category-title"
                                    key={"menu-" + menuItem.title}
                                >
                                    <span className="font-bold">
                                        {menuItem.title}
                                    </span>
                                    <div>
                                        {/* display sub items */}
                                        {menuItem?.itemCards?.map((item) => {
                                            return (
                                                <li
                                                    key={
                                                        "item-" +
                                                        item.card.info.id
                                                    }
                                                    className="item-title border-b-2 p-2"
                                                >
                                                    <div className="flex justify-between">
                                                        <span className="p-2">
                                                            {
                                                                item?.card?.info
                                                                    ?.name
                                                            }
                                                        </span>
                                                        <button
                                                            data-testid="addBtn"
                                                            className="bg-green-700 text-white p-2 px-4 rounded-md"
                                                            onClick={() =>
                                                                handleAddItem(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            {isItemadded(item)
                                                                ? "Remove"
                                                                : "Add"}
                                                        </button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </ul>
                            );
                        })
                    )}
                    {/* {console.log(restaurantDetails?)} */}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
