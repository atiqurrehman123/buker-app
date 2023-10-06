import React from "react";
import edit from "../../assests/pencil-edit.svg"
import deletes from "../../assests/trash.svg"
import "./CoupensTable.css"
const CoupensTable = () => {
  const tableHeader = [
    { id: 1, title: "ID" },
    { id: 2, title: "Percentage" },
    { id: 3, title: "On Amount" },
    { id: 4, title: "Valid Till" },
    { id: 5, title: "Status" },
    { id: 6, title: "Actions" },
  ];
  const tablebody = [
    {
      id: 1,
      ID: "CO8091 · Holi",
      totalorders: "5%",
      Amount: "₹5680",
      validtill: "25 09 2023",
      status: "Active",
    },
    {
      id: 2,
      ID: "CO8091 · Holi",
      totalorders: "5%",
      Amount: "₹5680",
      validtill: "25 09 2023",
      status: "Pending",
    },
    {
      id: 3,
      ID: "CO8091 · Holi",
      totalorders: "5%",
      Amount: "₹5680",
      validtill: "25 09 2023",
      status: "Verifying",
    },
    {
      id: 4,
      ID: "CO8091 · Holi",
      totalorders: "5%",
      Amount: "₹5680",
      validtill: "25 09 2023",
      status: "Approved",
    },
    {
      id: 5,
      ID: "CO8091 · Holi",
      totalorders: "3%",
      Amount: "₹5680",
      validtill: "25 09 2023",
      status: "Active",
    },
    {
      id: 6,
      ID: "CO8091 · Holi 1",
      totalorders: "67%",
      Amount: "₹5680",
      validtill: "25 09 2023",
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
              <td>{it.ID}</td>
              <td>{it.totalorders}</td>
              <td>{it.Amount}</td>
              <td>{it.validtill}</td>
              <td>{it.status}</td>
              <td>
                <span className="check-status">
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

export default CoupensTable;
