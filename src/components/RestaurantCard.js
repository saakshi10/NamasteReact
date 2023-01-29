const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
    avgRating,
}) => {
    return (
        <div className="card">
            <img
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId
                }
            ></img>
            <div className="name">{name}</div>
            <div className="cuisines">{cuisines?.join(", ")}</div>
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
