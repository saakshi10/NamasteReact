import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
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

test("should load shimmer page  results on Home page", () => {
    const bodyElement = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmerEle = bodyElement.getByTestId("shimmer-ui");
    expect(shimmerEle.children.length).toBe(10);
});

test("Restaurants should load on homepage", async () => {
    const bodyElement = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(bodyElement.getByTestId("search-btn")));

    const restaurantList = bodyElement.getByTestId("restaurant-list");
    expect(restaurantList.children.length).toBe(9);
});
