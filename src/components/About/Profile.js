import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);

    useEffect(() => {
        // api call
    }, []);

    return (
        <div>
            <h1>Profile Function Component</h1>
            <h3>{props.name}</h3>
            <h3>{count}</h3>
            {/* <h3>{count2}</h3> */}

            <button
                onClick={() => {
                    setCount(1);
                    // setCount2(2);
                }}
            >
                Counter
            </button>
        </div>
    );
};

export default Profile;
