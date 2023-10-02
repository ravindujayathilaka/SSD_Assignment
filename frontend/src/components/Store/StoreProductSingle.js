import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import "./Store.css";

const StoreProductSingle = ({ img, title, price, id }) => {
  const navigate = useNavigate();

  const deleteProduct = async () => {
    const { status } = await axios.delete(
      `http://localhost:8000/api/store/products/${id}`
    );

    alert("Product Deleted Successfully");
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt="product" />
      </div>

      <div
        className="store-store-product-title"
        style={{ color: "#6d6d6d", textAlign: "center" }}
      >
        <p className="my-2" style={{ fontSize: "18px", color: "#333" }}>
          <b>{title}</b>
        </p>
        <p style={{ fontSize: "24px", color: "#12af39" }}>
          <b>${price}</b>
        </p>

        <button
          onClick={() => {
            navigate(`/store/products/product/${id}`);
          }}
          id="store-store-details-button"
          className="btn btn-success"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default StoreProductSingle;
