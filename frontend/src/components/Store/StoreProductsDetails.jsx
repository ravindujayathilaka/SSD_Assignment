import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./Store.css";

const StoreProductsDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState();
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/store/product/${params.id}`)
      .then((res) => {
        setProduct(res.data.product);
      });
  }, [params]);

  return (
    <div className="mx-vw-100 min-vh-100">
      <div className="latest-store-details-cover position-relative">
        <img src="https://i.ibb.co/rkfrhCm/banner18.webp" alt="" />
        <div className="store-products-top text-secondary position-absolute top-50 start-50 translate-middle">
          <p> Home > Products > {product && product.name} </p>
        </div>
      </div>
      <div className="d-flex">
        <div className=" store-product-details-container">
          <div className="product-details-content w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <div class="row">
              <div class="col-4">
                {/* Image */}
                <img
                  className="product-details-img"
                  style={{
                    objectFit: "cover",
                    height: "500px",
                  }}
                  src={product && product.image}
                  alt=""
                />
              </div>
              <div class="col-8">
                <div className="h-100 my-4 d-flex flex-column justify-content-center">
                  <h4>{product && product.name}</h4>
                  <h2 className="my-3" style={{ color: "#12af39" }}>
                    ${product && product.price}
                  </h2>
                  <h6 style={{ color: "#777" }}>
                    {product && product.smallDes}
                  </h6>
                  <p className="my-3">{product && product.longDes}</p>
                  <div className="quantity-area col-4 my-3">
                    <label className="form-label">Choose your quantity:</label>
                    <input
                      type="number"
                      className={`form-control col-2 ${
                        quantity < 0 && "is-invalid"
                      }`}
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <div class="invalid-feedback">
                      Please enter a valid amount
                    </div>
                  </div>
                  <div className="col-4 my-3">
                    <button
                      disabled={quantity <= 0}
                      onClick={() => {
                        navigate(
                          `/store/order/store-order-create/${product._id}/${quantity}/${product.price}`
                        );
                      }}
                      id="product-details-buy-now"
                      className="btn product-details-buy-now w-100"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProductsDetails;
