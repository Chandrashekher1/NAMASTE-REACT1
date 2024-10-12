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
        sla,
    }=resData?.info;
    return (
        <div className="res-card" data-testid="resCard" style={{backgroundColor:'#f0f0f0'}}>
            <img className="res-logo"
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgvtyqrxzvpwmbs361er"
                 src={CDN_URL+cloudinaryImageId}
                 alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} For Two</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

// Higher order Componenet

// input - RestaurantCard =>> Output- RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        console.log(props);
        
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }

} 

export default RestaurantCard;