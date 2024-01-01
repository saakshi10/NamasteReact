import React from "react";
import UserContext from "../../utils/UserContext";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
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
                <UserContext.Consumer>
                    {(val) => (
                        <h1>Hi {val.user.name}, welcome to about us page</h1>
                    )}
                </UserContext.Consumer>
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

export default About;
