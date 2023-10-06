import React from "react";
import addNew from "../assests/AddNewIcon.svg";

const AddNewHeader = ({name,desc}) => {
  return (
    <div className="coupen-add">
      <div className="coupen-back">
        <img src={addNew} />
      </div>
      <div className="new-coupen1">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AddNewHeader;
