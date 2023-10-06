import React from "react";
import view from "../../assests/view.svg";
import "./CustomerTable.css";
const CustomerTable = () => {
  const tableHeader = [
    { id: 1, title: "Customer Name" },
    { id: 2, title: "Total Orders" },
    { id: 3, title: "Amount" },
    { id: 4, title: "Email" },
    { id: 5, title: "Mobile" },
    { id: 6, title: "Status" },
  ];
  const tablebody = [
    {
      id: 1,
      customerName: "INV90043 ID 8091 · Surya · Bengaluru",
      totalorders: "Lorem Ipsum",
      Amount: "₹5680",
      email:"john@example.com",
      mobile: "99932343",
      status: "Active",
    },
    {
      id: 2,
      customerName: "INV90043 ID 8091 · Surya · Bengaluru",
      totalorders: "Lorem Ipsum",
      Amount: "₹5680",
      email:"john@example.com",
      mobile: "99932343",
      status: "Active",
    },
    {
      id: 3,
      customerName: "INV90043 ID 8091 · Surya · Bengaluru",
      totalorders: "Lorem Ipsum",
      Amount: "₹5680",
      email:"john@example.com",
      mobile: "99932343",
      status: "Active",
    },
    {
      id: 4,
      customerName: "INV90043 ID 8091 · Surya · Bengaluru",
      totalorders: "Lorem Ipsum",
      Amount: "₹5680",
      email:"john@example.com",
      mobile: "99932343",
      status: "Active",
    },
    {
      id: 5,
      customerName: "INV90043 ID 8091 · Surya · Bengaluru",
      totalorders: "Lorem Ipsum",
      Amount: "₹5680",
      email:"john@example.com",
      mobile: "99932343",
      status: "Active",
    },
    {
      id: 6,
      customerName: "INV90043 ID 8091 · Surya · Bengaluru",
      totalorders: "Lorem Ipsum",
      Amount: "₹5680",
      email:"john@example.com",
      mobile: "99932343",
      status: "Active",
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
              <td>{it.customerName}</td>
              <td>{it.totalorders}</td>
              <td>{it.Amount}</td>
              <td>{it.email}</td>
              <td>{it.mobile}</td>
              <td>{it.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
