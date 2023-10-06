import React from "react";
import edit from "../../assests/pencil-edit.svg"
import deletes from "../../assests/trash.svg"
const UserListTable = () => {
  const tableHeader = [
    { id: 1, title: "Name" },
    { id: 2, title: "Email" },
    { id: 3, title: "Mobile" },
    { id: 4, title: "Status" },
    { id: 6, title: "Actions" },
  ];
  const tablebody = [
    {
      id: 1,
      Name: "CO8091 · Holi",
      Email: "5%",
      Mobile: "₹5680",
      status: "Active",
    },
    {
      id: 2,
      Name: "CO8091 · Holi",
      Email: "5%",
      Mobile: "₹5680",
      status: "Pending",
    },
    {
      id: 3,
      Name: "CO8091 · Holi",
      Email: "5%",
      Mobile: "₹5680",
      status: "Verifying",
    },
    {
      id: 4,
      Name: "CO8091 · Holi",
      Email: "5%",
      Mobile: "₹5680",
      status: "Approved",
    },
    {
      id: 5,
      Name: "CO8091 · Holi",
      Email: "3%",
      Mobile: "₹5680",
      status: "Active",
    },
    {
      id: 6,
      Name: "CO8091 · Holi 1",
      Email: "67%",
      Mobile: "₹5680",
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
              <td>{it.Name}</td>
              <td>{it.Email}</td>
              <td>{it.Mobile}</td>
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

export default UserListTable;
