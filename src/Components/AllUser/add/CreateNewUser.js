import React, { useState } from "react";
import "./CreateNewUser.css";
import AddNewHeader from "../../AddNewHeader";
import CustomDropdown from "../../CustomDropdown/CustomDropdown";

const CreateNewUser = () => {
  const initialFormData = {
    username: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  

 

  const validateForm = () => {
    const newErrors = {};
    // Validate couponName (required)
    if (!formData.username) {
      newErrors.couponName = " Name is required";
    }

    // Validate other fields here...

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log(formData)

    if (isValid) {
      // Handle form submission, e.g., send data to the server
      console.log("Form data:", formData);
    } else {
      console.error("Form has errors. Cannot submit.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <AddNewHeader
        name={" Add New User"}
        desc={"Manage users"}
      />
      

      <div className="coupen-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div>
              <label className="coupen-label">
                Coupon Name{" "}
                {errors.username && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
        
            <div>
              <label className="coupen-label">
                Discount Percentage
                {errors.email && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="coupen-label">
                On Amount{" "}
                {errors.phone && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
           
          </div>

         
          <div className="buttons-container">
            <button className="submit-btn" type="submit">
              Save
            </button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewUser;
