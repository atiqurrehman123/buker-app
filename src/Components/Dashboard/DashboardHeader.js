import React from "react";
import "./DashboardHeader.css";
const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h4>Dashboard</h4>
      <div className="input-design">
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.96967 5.71967C4.26256 5.42678 4.73744 5.42678 5.03033 5.71967L8 8.68934L10.9697 5.71967C11.2626 5.42678 11.7374 5.42678 12.0303 5.71967C12.3232 6.01256 12.3232 6.48744 12.0303 6.78033L8.53033 10.2803C8.23744 10.5732 7.76256 10.5732 7.46967 10.2803L3.96967 6.78033C3.67678 6.48744 3.67678 6.01256 3.96967 5.71967Z"
              fill="#697386"
            />
          </svg>
        </div>
        <input className="input-text" type="text" placeholder="This Week" />
      </div>
      <h3>Top Products</h3>
      <div className="input-design">
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.96967 5.71967C4.26256 5.42678 4.73744 5.42678 5.03033 5.71967L8 8.68934L10.9697 5.71967C11.2626 5.42678 11.7374 5.42678 12.0303 5.71967C12.3232 6.01256 12.3232 6.48744 12.0303 6.78033L8.53033 10.2803C8.23744 10.5732 7.76256 10.5732 7.46967 10.2803L3.96967 6.78033C3.67678 6.48744 3.67678 6.01256 3.96967 5.71967Z"
              fill="#697386"
            />
          </svg>
        </div>
        <input className="input-text" type="text" placeholder="Products" />
      </div>
    </div>
  );
};

export default DashboardHeader;
