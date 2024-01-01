import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import UserContext from "../utils/UserContext";

export const Title = () => {
    return (
        <a href="/">
            <img className="h-28 p-2" src={logo} alt="Logo" />
        </a>
    );
};

function isLoggedIn() {
    // api call to check authentication
    // suscess - return true else false
    return true;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { user } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-50 shadow-md sm:bg-blue-50 lg:bg-purple-200">
            <Title />
            <div>
                <ul className="flex justify-items-start py-10">
                    <li className="px-4 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart</Link>Cart - {cartItems.length}
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="p-2 font-bold">{user.name}</h2>
                {isLoggedIn ? (
                    <button id="login-btn" onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>
                ) : (
                    <Link to={"/login/"}>
                        <button
                            id="logout-btn"
                            onClick={() => setIsLoggedIn(true)}
                        >
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

/**
 *
 *
 * TWO ways to export
 * 1. export default
 *    export default can only export one thing (but not both Header and Title)
 *    in such cases import happens via:
 *    import Header from './file/path'
 * 2. export const Title
 *    known as exporting by name
 *    import using {Title} from './file/path*
 *
 *
 *
 */
export default Header;
