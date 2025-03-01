import React from "react";
import "./Foodcard.css";

const ProductCard = (props) => {
  return (
      <div> 
        <img src={props.img}alt=""/>
        <h1>{props.ProductName}</h1>
      </div>
  );
};
export default ProductCard;