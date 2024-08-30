import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState , useEffect} from "react";
import Shimmar from "./Shimmer";
import { Link } from "react-router-dom";
//useState is used to maintain  the state of your react component/react app

const Body = () => {
    //this is how you create a state variable , here we pass a default value here
    //use state return an array
    //will also work if we use const arr and then assign arr to use state
    const [listOfRestaurants, setListOfRestaurants]=useState([])
    const [filteredRestaurants, setfilteredRestaurants] = useState([])
   
    const [searchText , setSearchText] = useState("")
    // Whenever state variables update, react triggers a reconcilation cycle
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5758143&lng=77.1923685&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await response.json();
         
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
            setListOfRestaurants(restaurants);
            setfilteredRestaurants(restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
       
    return listOfRestaurants.length === 0?(<Shimmar/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange ={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() => {
                        // Filter the restraunt cards and update the UI
                        // SearchText
                        
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                        setfilteredRestaurants(filteredRestaurants)   
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter(
                        (item) => item.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredRestaurants);
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"/Restaurant/"+restaurant.info.id}> <RestaurantCard resData={restaurant}/></Link>
                ))
                }
            </div>
        </div>
    )
}
export default Body;