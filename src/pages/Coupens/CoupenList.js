import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import CoupensTable from "../../Components/AllCopens/CoupensTable";
import { useNavigate } from "react-router-dom";
const CoupenList = () => {
  const navigate=useNavigate();

  return (
    <div>
      <SectionHeader
        sectionName={"Coupens"}
        newTag={<button className="add-new" onClick={()=>navigate("/add-new-coupen")}>Create NEW COUPON</button>}
      />

      <CoupensTable />
    </div>
  );
};

export default CoupenList;
