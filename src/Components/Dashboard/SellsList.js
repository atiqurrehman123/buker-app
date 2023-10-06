import React from "react";
import "./SellList.css";
const SellsList = () => {
  return (
    <div className="sell-container">
       { [1,2,3,4,5,6].map((item,index)=>(
      <div className="list-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
        </svg>
        <div className="list-product-name">
          <p> Cap</p>
          <p>₹456</p>
        </div>
        <progress id="file" value="62" max="100"> 32% </progress>
        <div className="list-product-total">
          <p> Total Sales</p>
          <p>₹4569434</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default SellsList;
