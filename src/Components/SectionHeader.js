import React from "react";
import "./sectionheader.css"
const SectionHeader = ({ sectionName ,newTag=""}) => {
  return (
    <div className="section-header">
      <h4>{sectionName}</h4>
      {newTag}
    </div>
  );
};

export default SectionHeader;
