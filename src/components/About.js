import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const AboutComponent = () => {
    return (
        <div className="about-us">
            <h1>About Us page</h1>
            <ProfileClass name={"Saakshi"} />
            <Profile name={"Saakshi"} />
            {/* <Link to={"/about/profile"}>pr</Link>
            <Outlet></Outlet> */}
        </div>
    );
};

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("constructor called");
    }

    render() {
        console.log("render called");

        return (
            <div className="about-us">
                <h1>About Us page</h1>
                <ProfileClass />
                {/* <ProfileClass name={"Singhal"} /> */}

                {/* <Profile name={"Saakshi"} /> */}
            </div>
        );
    }

    componentDidMount() {
        console.log("componenetDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
}

// export default AboutComponent;
export default About;
