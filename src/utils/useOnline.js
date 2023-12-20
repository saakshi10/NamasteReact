import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = () => {
        setIsOnline(true);
    };

    const handleOffline = () => {
        setIsOnline(false);
    };

    // on page load, below function is triggered
    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    // returns is online status
    return isOnline;
};

export default useOnline;
