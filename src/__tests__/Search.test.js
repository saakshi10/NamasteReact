import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Body from "../components/Body";
import store from "../utils/store/store";
import { RESTAURANT_DATA } from "../mocks/mockRestaurantData";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});

test("search for string (food) results on Home page", async () => {
    const bodyElement = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(bodyElement.getByTestId("search-btn")));

    const searchInput = bodyElement.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "food" } });

    // to mimc click
    const searchBtn = bodyElement.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const restaurantList = bodyElement.getByTestId("restaurant-list");
    expect(restaurantList.children.length).toBe(1);
});
