import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        // Create State object
        this.state = {
            count: 0,
            count2: 0,
            userInfo: {
                name: "Dummy Data",
                location: "Dummy Location",
            },
        };
        console.log("child constructor called " + this.props.name);
    }

    render() {
        console.log("child render called " + this.props.name);

        return (
            <div className="profilr-info">
                <h1>Profile Class Component</h1>
                <h3>{this.state.userInfo.name}</h3>
                <h3>{this.state.userInfo.location}</h3>
                <img src={this.state.userInfo.avatar_url} />

                <h3>{this.state.count}</h3>
                <h3>{this.state.count2}</h3>

                {/* WE DONOT MUTATE STATE DIRECTLY*/}
                <button onClick={() => this.setState({ count: 1, count2: 2 })}>
                    Counter
                </button>
            </div>
        );
    }

    // can make a componenet did mount as async but cannot make callback function of useEffect async
    async componentDidMount() {
        console.log("child - componenetDidMount" + this.props.name);

        //APIs to be called here
        const data = await fetch("https://api.github.com/users/saakshi10");
        const json = await data.json();
        this.setState({ userInfo: json });

        // 'this' is shared with all functions of class
        this.timer = setInterval(() => {
            console.log("REACT cODE");
        }, 1000);
    }

    componentDidUpdate() {
        console.log("child - componentDidUpdate" + this.props.name);
    }

    componentWillUnmount() {
        console.log("child - componentWillUnmount");
        // clean up shoud come here
        // like cleaning setInterval
        clearInterval(this.timer);
    }
}

export default ProfileClass;
