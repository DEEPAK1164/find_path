import Title from "./Title";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
const[isLoggedIn,setIsLoggedIn]=useState(false);
    return (
      //inline style in jsx
      <div className="header" style={{ backgroundColor: "red" }}>
        <Title />
        
        {/* <h1>{title}</h1>
        <button onClick={function(){
          setTitle("Food Mania");
        }}>Change Title</button> */}


        <div className="nav-items">
          <ul>
         
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn? (
            <button onClick={()=>setIsLoggedIn(false)}>LogOut</button>
        ):(
          <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>
        )}
      </div>
    );
  };
  
  export default Header;