import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRstaurants] = useState([]);
  const [searchText, setSerchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    let json;
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      json = await data.json();
    } catch (error) {
      if (error instanceof SyntaxError) {
        // Unexpected token < in JSON
        console.log("There was a SyntaxError", error);
      } else {
        console.log("There was an error", error);
      }
    }
    console.log(json);

    //HW Read about optional chaining..
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRstaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");
  //conditional rendering
  //if restaurant is empty=>shimmer UI
  //if restraurant has data load actual data UI

  //earlyreturn not render component
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSerchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //updatethe stae-restaurants
            setFilteredRstaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map( (x)=> {
          return (
          <Link 
           to={"/restaurant/" + x.data.id}
           key={x.data.id}
            >
          <RestaurantCard {...x.data} />;
          </Link>
          );
        })}
      </div>


      {/* <div className="restaurant-list">
        {filteredRestaurants.map(function (x) {
          return <RestaurantCard {...x.data} key={x.data.id} />;
        })} */}
        {/* <RestaurantCard {...restaurantList[0].data}/>
        <RestaurantCard {...restaurantList[1].data}/>
        <RestaurantCard {...restaurantList[2].data}/>
         */}
      {/* </div> */}


    </>
  );
};
export default Body;
