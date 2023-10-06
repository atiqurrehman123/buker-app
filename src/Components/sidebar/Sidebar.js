import React from "react";
import { SidebarData } from "./sidebardata";
import { Link } from "react-router-dom";
import sales from "../../assests/sidebar/sales.svg"
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div>
        {SidebarData.map((item,index)=>(
           <Link to={item.link} style={{textDecoration:"none"}}>
        <div className="sidebar-card">
         
          <img src={item.icon} />
          <div className="inner-section">
            <h4>{item.name}</h4>
            <p>{item.content}</p>
          </div>
         
        </div>
        </Link>
         ))}
      </div>

      <p className="copyright">Copyright © 2023 Buykar</p>
    </div>
  );
};

export default Sidebar;
