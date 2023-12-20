import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {
    // if resId changes, reset the data and fetch new data
    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + resId);
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

    return { restaurantDetails, restaurantMenu };
};

export default useRestaurant;
