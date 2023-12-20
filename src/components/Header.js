import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

export const Title = () => {
    return (
        <a href="/">
            <img className="logo" src={logo} alt="Logo" />
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

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/instamart">Instamart</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>

            <div>
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
