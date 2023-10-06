import React from "react";
import view from "../../assests/view.svg";
import "./InvoiceList.css";
const InvoiceList = () => {
  const tableHeader = [
    { id: 1, title: "Invoice Number" },
    { id: 2, title: "Description" },
    { id: 3, title: "Amount" },
    { id: 4, title: "Status" },
    { id: 5, title: "Date" },
    { id: 6, title: "View" },
  ];
  const tablebody = [
    {
      id: 1,
      invoiceNumber: "INV90043 ID 8091 · Surya · Bengaluru",
      Description: "Lorem Ipsum",
      Amount: "₹5680",
      status: "PAID",
      dates: "Aug 02 2023",
    },
    {
      id: 2,
      invoiceNumber: "INV90043 ID 8091 · Surya · Bengaluru",
      Description: "Lorem Ipsum",
      Amount: "₹5680",
      status: "PAID",
      dates: "Aug 02 2023",
    },
    {
      id: 3,
      invoiceNumber: "INV90043 ID 8091 · Surya · Bengaluru",
      Description: "Lorem Ipsum",
      Amount: "₹5680",
      status: "PAID",
      dates: "Aug 02 2023",
    },
    {
      id: 4,
      invoiceNumber: "INV90043 ID 8091 · Surya · Bengaluru",
      Description: "Lorem Ipsum",
      Amount: "₹5680",
      status: "PAID",
      dates: "Aug 02 2023",
    },
    {
      id: 5,
      invoiceNumber: "INV90043 ID 8091 · Surya · Bengaluru",
      Description: "Lorem Ipsum",
      Amount: "₹5680",
      status: "PAID",
      dates: "Aug 02 2023",
    },
    {
      id: 6,
      invoiceNumber: "INV90043 ID 8091 · Surya · Bengaluru",
      Description: "Lorem Ipsum",
      Amount: "₹5680",
      status: "PAID",
      dates: "Aug 02 2023",
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
              <td>{it.invoiceNumber}</td>
              <td>{it.Description}</td>
              <td>{it.Amount}</td>
              <td>{it.status}</td>
              <td>{it.dates}</td>
              <td>
                <img src={view} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
