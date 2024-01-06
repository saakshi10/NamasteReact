import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../utils/store/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
    //Load header and check if logo is loaded
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    // console.log(header);
    const logo = header.getAllByTestId("logo");
    // console.log(logo[0]);

    expect(logo).toBeTruthy();
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
});

test("Online status should be displayed on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const status = header.getByTestId("online-status");
    expect(status.innerHTML).toBe("Online");
});

test("cart should have 0 items on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const cartItems = header.getByTestId("cart-items");
    expect(cartItems.innerHTML).toBe("Cart - 0");
});
