const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
    avgRating,
}) => {
    return (
        <div className="w-56 p-4 m-2 shadow-lg rounded-md shadow-pink-400 border-pink-500 bg-white">
            <img
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId
                }
            ></img>
            <div className="name font-bold text-lg">{name}</div>
            <div className="cuisines text-sm italic">
                {cuisines?.join(", ")}
            </div>
            <div className="details">
                <span className="distance">{lastMileTravelString}</span>
                <span className="rating">
                    <i className="fa-solid fa-star user-icon"></i> {avgRating}
                </span>
            </div>
        </div>
    );
};

export default RestaurantCard;
