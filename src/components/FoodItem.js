import React from "react";
import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, imageId, price, id }) => {
    return (
        <div
            className="w-56 p-4 m-2 shadow-lg rounded-md border-pink-500 bg-white"
            key={"cart-item-" + id}
        >
            <img src={IMG_CDN_URL + imageId}></img>
            <div className="name font-bold text-lg">{name}</div>
            <div className="cuisines text-sm italic">Rs. {price / 100}</div>
        </div>
    );
};

export default FoodItem;
