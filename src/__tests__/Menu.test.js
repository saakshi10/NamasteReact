import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/store/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_MENU } from "../mocks/mockRestaurantMenu";
import RestaurantMenu from "../components/RestaurantMenu";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_MENU);
        },
    });
});

test("Add Items to Cart", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("menu-list")));

    const addBtn = body.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[2]);

    const cartItems = body.getByTestId("cart-items");
    expect(cartItems.innerHTML).toBe("Cart - 2");
});
