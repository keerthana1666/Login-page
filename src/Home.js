

import React, { useEffect } from "react";
import "./Home.css";
import logo from "./spark2.jpg";
import hoodie from "./hoddie6.webp";
import hoodie2 from "./hoddie5.webp";
import hoodie3 from "./hoddie3.webp";
import hoodie4 from "./hoddie4.webp";
// import axios from "axios"; 


const Home = () => {
//   const[productdata,setproductdata]=usestate([]);
//  async function getData() {
 
//   await axios.get("https://dummyjson.com/products").then((res)=>{
//   setproductdata(res.data.products);
//   } );
//  }

//  useEffect(()=>{
//   getData();
//  },[]);
//  console.log(productdata);
 
  return (
    <div>
      <div className="navBar">
        <img src={logo} alt="" />
      <marquee behaviour="alternate"><h2><i><q>An exciting place for the whole family to shop</q></i></h2></marquee>
        <div className="menuContainer">
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <button className="button">Login</button>
        </div>

        
      </div>

      <div className="container">
          <div className="card">
            <img src={hoodie} alt="" />
            <h3>Black Hoddie</h3>
            <p>$13</p>
            <button><b>Add To Cart</b></button>
          </div>
          <div className="card">
            <img src={hoodie2} alt="" />
            <h3>White Hoddie</h3>
            <p>$24</p>
            <button><b>Add To Cart</b></button>
          </div>
          <div className="card">
            <img src={hoodie3} alt="" />
            <h3>Grey Hoddie</h3>
            <p>$32</p>
            <button><b>Add To Cart</b></button>
          </div>
          <div className="card">
            <img src={hoodie4} alt="" />
            <h3>Green Hoddie</h3>
            <p>$19</p>
            <button><b>Add To Cart</b></button>
          </div>
        </div>
    </div>
  );
};

export default Home;
