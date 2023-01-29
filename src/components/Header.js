import logo from "../../assets/img/logo.jpg";

export const Title = () => {
    return (
        <a href="/">
            <img className="logo" src={logo} alt="Logo" />
        </a>
    );
};

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
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
