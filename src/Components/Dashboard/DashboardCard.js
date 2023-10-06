import React from "react";
import "./DashboardCard.css";
import sell from "../../assests/dashboardsells.svg";
const cards = [
  { name: "Total Sales", value: " ₹ 20,03,4000" },
  { name: "Profit", value: "₹ 4,00,261" },
  { name: "New Customers", value: "768" },
  {
    name: "New Orders",
    value: "987",
  },
];
const DashboardCard = () => {
  return (
    <div className="main-container-card">
      {cards.map((it, index) => (
        <div className="dashboardCard" style={{background:it.name==="Profit"?"#695779":it.name==="New Orders"?"#BAB86C":""}}>
          <img src={sell} />
          <p>{it.name}</p>
          <h1>{it.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
