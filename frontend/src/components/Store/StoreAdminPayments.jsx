import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const StoreAdminPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/store/payments`).then((res) => {
      setPayments(res.data.payments);
    });
  }, []);

  const printPdf = () => {
    const input = document.querySelector(".pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Agrotec LLC");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      doc.text(145, 85, "Signature :");
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "Agrotec Reports" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  };

  return (
    <div className="store-container d-flex justify-content-center p-5">
      <div className="w-100 min-vh-100" id="store-admin-admin456412123">
        <h3> Store Payment Admin </h3>
        <p> These are the payments happend inside this month </p>

        <div className="d-flex">
          <button className="btn btn-success" onClick={printPdf}>
            <i class="fa-solid fa-file-pdf mx-2"></i> Download Payments As PDF
          </button>
        </div>

        <table
          class="table mt-4 store-orders-container"
          id="app-store-admin-table-header-44512135"
        >
          <thead className="store-admin-table-header">
            <tr>
              <th scope="col">Payment ID</th>
              <th scope="col">Payee Name</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments &&
              payments.map((payment) => (
                <tr>
                  <th scope="row" style={{ width: "300px" }}>
                    {payment._id}
                  </th>
                  <td>{payment.paidBy}</td>
                  <td>$ {payment.amount}</td>
                  <td style={{ width: "300px" }}>{payment.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreAdminPayments;
