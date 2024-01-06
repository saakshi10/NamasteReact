const Shimmer = () => {
    return (
        <div className="home-page">
            {/* <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for restaurant"
                    className="search-bar"
                />
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div> */}

            <div className="restaurant-list" data-testid="shimmer-ui">
                {Array(10)
                    .fill("")
                    .map((e, index) => (
                        <div className="shimmer-card" key={index}></div>
                    ))}
            </div>
        </div>
    );
};

export default Shimmer;
