import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useResturantMenu";
import RestaurantCategory from "./RestarurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Retrieve the restaurant ID from URL params
    const resInfo = useRestaurantMenu(resId);  // Fetch restaurant info using the custom hook

    const [showIndex, setshowIndex] = useState(null)

    // If resInfo is null or the API call hasn't returned data yet, display a loading shimmer
    if (resInfo === null) {
        return <Shimmer />;
    }

    // Safely destructure the response data using optional chaining
    const {
        name = "Unknown Restaurant",
        cuisines = [],
        costForTwoMessage = "Cost information not available",
    } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    const Categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
    console.log(Categories);
    
    // Ensure there are menu items to display
    if (!itemCards.length) {
        return <div>No menu items available.</div>;
    }

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹{(item.card.info.defaultPrice / 100) || (item.card.info.price / 100) || "Price not available"}
                    </li>
                ))}
            </ul> */}

            {/* Categories accordions */}

            {Categories.map((category,index) => (
                // control components
                <RestaurantCategory key ={category?.card?.card.title} 
                data ={category?.card?.card} 
                showItems = { index === showIndex ? true : false} 
                // setshowIndex={() => setshowIndex(prevIndex => (prevIndex === index ? null : index))}

                setshowIndex= { () => setshowIndex(index)}
                />
                
            ))}

        </div>
    );
};

export default RestaurantMenu;
