import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import UserListTable from "../../Components/AllUser/UserListTable";
import { useNavigate } from "react-router-dom";


const UsersList = () => {
  const navigate=useNavigate();

  return (
    <div>
      <SectionHeader
        sectionName={"Users"}
        newTag={
          <button
            className="add-new"
            onClick={() => navigate("/create-new-user")}
          >
            Create NEW User
          </button>
        }
      />
      <UserListTable />
    </div>
  );
};

export default UsersList;
