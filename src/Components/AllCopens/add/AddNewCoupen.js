import React, { useState } from "react";
import "./AddNewCoupen.css";
import AddNewHeader from "../../AddNewHeader";
import CustomDropdown from "../../CustomDropdown/CustomDropdown";

const AddNewCoupen = () => {
  const initialFormData = {
    couponName: "",
    category: "",
    subCategory: "",
    discountPercentage: "",
    onAmount: "",
    validFrom: "",
    validTo: "",
    occasionName: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const options = ['Hair ', 'New Style 2', 'New  '];
  const option2 = ['Nested New ', 'Nested 2', 'Nested 3  '];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const validateForm = () => {
    const newErrors = {};
    // Validate couponName (required)
    if (!formData.couponName) {
      newErrors.couponName = "Coupon Name is required";
    }

    // Validate other fields here...

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

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
        name={"Add New Coupon"}
        desc={"Create a discount to a product"}
      />
      

      <div className="coupen-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div>
              <label className="coupen-label">
                Coupon Name{" "}
                {errors.couponName && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="couponName"
                value={formData.couponName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="coupen-label">
                Select a Category{" "}
                {errors.couponName && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
               <CustomDropdown options={options} onSelect={handleSelect} />
            </div>
            <div>
              <label className="coupen-label">
                Select a Sub Category{" "}
                {errors.couponName && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <CustomDropdown options={option2} onSelect={handleSelect} />
            </div>
          </div>

          <div className="input-container">
            <div>
              <label className="coupen-label">
                Discount Percentage
                {errors.couponName && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="coupen-label">
                On Amount{" "}
                {errors.couponName && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="onAmount"
                value={formData.onAmount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="coupen-label">
                Valid from & To
                {errors.validTo && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="validTo"
                value={formData.validTo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-container">
            <div>
              <label className="coupen-label">
                Occasion Name
                {errors.occasionName && (
                  <span style={{ color: "red" }}>{"*"}</span>
                )}
              </label>
              <input
                className="input-add-coupen"
                placeholder="Name"
                type="text"
                name="occasionName"
                value={formData.occasionName}
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

export default AddNewCoupen;
