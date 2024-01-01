import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
// import { clearCart } from "../utils/store/cartSlice";
import { clearCart } from "../utils/store/cartSlice";

const CartComponent = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    return (
        <div className="m-5">
            <div className="flex justify-between">
                <div className="font-bold text-3xl">Your Cart</div>
                <button
                    className="bg-red-600 text-white p-2 rounded-md"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>
            <div className="restaurant-list flex flex-wrap justify-start">
                {cartItems.length > 0 ? (
                    cartItems?.map((item) => {
                        return (
                            // <div
                            //     className="item-title border-b-2  m-4"
                            //     key={"item-" + item.card.info.id}
                            // >
                            //     <span className="p-2">{item?.card?.info?.name}</span>
                            // </div>
                            <FoodItem
                                key={"item-" + item.card.info.id}
                                {...item?.card?.info}
                            />
                        );
                    })
                ) : (
                    <div className=""> Your cart is empty</div>
                )}
            </div>
        </div>
    );
};

export default CartComponent;
