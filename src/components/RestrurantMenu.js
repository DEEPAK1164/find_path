import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
const RestrurantMenu = () => {
    //how to read a dynamic url params
    const params=useParams();
    const {resid}=params;
    //console.log(params);
    const[restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0411832&lng=77.612441699999999999999&restaurantId="+ resid
        );
        const json=await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }


  return (!restaurant)?<Shimmer/>: (
    <div className="menu">
    <div>
      <h1>Restaurant id:{resid}</h1>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_URL+restaurant.cloudanaryImageId}/>
      <h3>{restaurant.area}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating} stars</h3>
      <h3>{restaurant.costForTwoMsg}</h3>
</div>
<div>
  <h1>Menu</h1>
  <ul>
    {Object.values(restaurant.menu.items).map((item)=><li key={item.id}>{item.name}</li>)}
  </ul>
</div>
    </div>

  )
}

export default RestrurantMenu;
