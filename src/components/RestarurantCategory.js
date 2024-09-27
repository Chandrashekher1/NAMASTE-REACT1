import { useState } from "react";
import ItemList from "./itemsList";

const RestaurantCategory = ({data,showItems,setshowIndex}) => {
    // const [showItems, setshowItems] = useState(false)

    const handleClick = () => {
        setshowIndex()
        
    }

    if (!data) {
        return <div>Loading...</div>; // Or some loading indicator
    }
    
    return (
        
        <div>
            {/* Header */}
            <div className="CatHeader" onClick={handleClick}>
                <div className="item">
                <span className="head">{data.title} ({data.itemCards?.length}) </span>
                <span>{showItems ? '👆' : '👇'}</span>
                </div>
                {/* Accordian */}
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
            
        </div>
    )
}
export default RestaurantCategory