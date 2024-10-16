import React, { useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState , useEffect} from "react";
import Shimmar from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


//useState is used to maintain  the state of your react component/react app

const Body = () => {
    //this is how you create a state variable , here we pass a default value here
    //use state return an array
    //will also work if we use const arr and then assign arr to use state
    const [listOfRestaurants, setListOfRestaurants]=useState([])
    const [filteredRestaurants, setfilteredRestaurants] = useState([])

    console.log(listOfRestaurants);
    
   
    const [searchText , setSearchText] = useState("")
    // Whenever state variables update, react triggers a reconcilation cycle
    
    // Promoted label card

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

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
         
            const restaurant = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
            setListOfRestaurants(restaurant);
            setfilteredRestaurants(restaurant);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false){
        return <h1>Looks like you are offline!! Please check your internet connection</h1>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {loggedInUser , setUserName} = useContext(UserContext)
        
    return listOfRestaurants.length === 0?(<Shimmar/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" data-testid= "searchInput" placeholder="Search for restaurant and food" value={searchText} onChange ={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() => {
                        // Filter the restraunt cards and update the UI
                        // SearchText
                        
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                        setfilteredRestaurants(filteredRestaurants)   
                    }}>Search</button>
                </div>
                <label for="name" className="input">UserName  : </label>
                <input className="userName" id="name" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                    
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter(
                        (item) => item.info.avgRating > 0
                    );
                    setListOfRestaurants(filteredRestaurants);
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                   <Link className="resCard-link" key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                   {console.log('Navigating to:', `/restaurants/${restaurant.info.id}`)}

                   {/* If the restaurant is promoted, add a promoted label */}
                   {restaurant.info.promoted ? (
                       <RestaurantCardPromoted resData={restaurant} />
                   ) : (
                       <RestaurantCard resData={restaurant} />
                   )}
                  </Link>
                ))
                }
            </div>
        </div>
    )
}
export default Body;