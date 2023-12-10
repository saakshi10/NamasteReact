import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = (props) => {
    const params = useParams();
    const { id } = params;

    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState([]);

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
        getRestaurantMenu(json);
    }

    const getRestaurantMenu = (restaurantData) => {
        let menuCard;

        restaurantData?.data?.cards?.forEach((card) => {
            const cardKeys = Object.keys(card);

            let hasMenu = cardKeys.find((item) => {
                return item === "groupedCard" ? true : false;
            });
            if (hasMenu) {
                console.log(hasMenu);
                menuCard = card;
                return;
            }
        });

        getMenuItems(menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };

    const getMenuItems = (menuCardsList) => {
        const menuId =
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const menuList = [];
        console.log(menuCardsList);
        menuCardsList.forEach((card) => {
            if (card?.card?.card["@type"] === menuId) {
                menuList.push(card?.card?.card);
            }
        });
        console.log(menuList);
        setRestaurantMenu(menuList);
    };

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
