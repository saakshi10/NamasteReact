import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();

    // destructuring is possible
    const { status, statusText } = err;
    console.log(err);

    return (
        <div className="error-page">
            <h1>Oops!!</h1>
            <h2> Something went wrong </h2>
            <p>{err.status + " + " + err.statusText}</p>
        </div>
    );
};

export default ErrorComponent;
