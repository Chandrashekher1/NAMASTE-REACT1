import React from "react";
import {CDN_URL} from "../utils/constants";//method to import named export

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    }=resData?.data;
    return (
        <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
            <img className="res-logo"
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgvtyqrxzvpwmbs361er"
                 src={CDN_URL+cloudinaryImageId}
                 alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100} For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;