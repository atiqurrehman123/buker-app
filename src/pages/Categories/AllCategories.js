import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import CategoryTable from "../../Components/AllCategory/CategoryTable";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const navigate=useNavigate()
  return (
    <div>
      <SectionHeader sectionName={"Categories"}
              newTag={<button className="add-new" onClick={()=>navigate("/add-new-category")}>Create NEW category</button>}
              />
      <CategoryTable/>
    </div>
  );
};

export default AllCategories;
