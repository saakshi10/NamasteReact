import React from "react";
import ReactDOM from "react-dom/client";
import logo_icon from "./assets/img/dl_logo.jpg";

const HeaderComponent = () => {
    return (
        <div className="header">
            {logo}
            {searchBar}
            {user}
        </div>
    );
};

const logo = <img src={logo_icon}></img>;

const searchBar = (
    <input type="text" placeholder="Search" className="search-bar" />
);

const user = <i className="fa-solid fa-user user-icon"></i>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
