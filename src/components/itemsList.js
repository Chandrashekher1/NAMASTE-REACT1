import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        // Dispatch an action

        dispatch(addItem(item))
    }
    return (
        <div>
            {items && items.length > 0 ? (
                items.map((item) => (
                    <div className="itemKey" key={item?.card?.info?.id}> {/* Safe access using optional chaining */}

                        <div>
                            <div>
                                <span>{item?.card?.info?.name || "No Name Available"}</span>
                                <span> ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 || "Price not available"}</span>  
                            
                            </div>
                            <p>{item?.card?.info?.description || "No Description Available"}</p>
                        </div>
                        <div>
                            <div>
                                <button className="btn" onClick={() => handleAddItem(item)}>ADD+</button>
                            </div>
                            <img src={CDN_URL + item?.card?.info?.imageId} alt=""/>
                        </div>   
                    </div>
                ))
            ) : (
                <p>No items available</p> 
            )}
        </div>
    );
};

export default ItemList;
