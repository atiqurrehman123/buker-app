import React from "react";
import edit from "../../assests/pencil-edit.svg"
import deletes from "../../assests/trash.svg"
import "./CreateNewCategory.css"
const CategoryTable = () => {
  const tableHeader = [
    { id: 1, title: "Categories" },
    { id: 2, title: "Sub Categories " },
    { id: 3, title: "Status" },
    { id: 4, title: "Actions" },
  ];
  const tablebody = [
    {
      id: 1,
      Categories: "CO8091 · Holi",
      subCategories: "5%",
      status: "Active",
    },
    {
      id: 2,
      Categories: "CO8091 · Holi",
      subCategories: "5%",
      status: "Pending",
    },
    {
      id: 3,
      Categories: "CO8091 · Holi",
      subCategories: "5%",
      status: "Verifying",
    },
    {
      id: 4,
      Categories: "CO8091 · Holi",
      subCategories: "5%",
      status: "Approved",
    },
    {
      id: 5,
      Categories: "CO8091 · Holi",
      subCategories: "3%",
      status: "Active",
    },
    {
      id: 6,
      Categories: "CO8091 · Holi 1",
      subCategories: "67%",
      status: "Approved",
    },
  ];
  return (
    <div className="invoice-container">
      <table>
        <thead>
          <tr>
            {tableHeader.map((it, index) => (
              <th scope="col">{it.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tablebody.map((it, index) => (
            <tr>
              <td>{it.Categories}</td>
              <td>{it.subCategories}</td>
              <td>{it.status}</td>
              <td>
                <span className="check-category">
                  <button > <img src={edit} /></button>
                  <button> <img src={deletes} /></button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
