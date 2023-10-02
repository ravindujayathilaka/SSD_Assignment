import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import "./Store.css";
import swal from "sweetalert";

const StorePaymentScreen = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState();
  const [product, setProduct] = useState();

  useState(() => {
    axios
      .get(`http://localhost:8000/api/store/order/${orderId}`)
      .then((res) => {
        setOrder(res.data.order);
        axios
          .get(
            `http://localhost:8000/api/store/product/${res.data.order.product}`
          )
          .then((res) => {
            setProduct(res.data.product);
          });
      });
  }, []);

  const [paypalEmail, setPaypalEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [owner, setOwner] = useState("");
  const [error, setError] = useState("");
  const [paid, setPaid] = useState(false);

  const onClick = (e) => {
    if (paypalEmail.length <= 0 && creditCard.length <= 0) {
      console.log(paypalEmail.length <= 0);
      console.log(creditCard.length <= 0);
      setError("You need to enter either you credit card or paypal");
      return;
    }

    var re = /\S+@\S+\.\S+/;

    if (!re.test(paypalEmail)) {
      setError("Please enter valid email format");
      return;
    }

    const payment = {
      paymentType: paypalEmail.length > 0 ? "paypal" : "card",
      amount: order.total,
      paid: true,
      paidBy: owner,
      paypalUserName: paypalEmail,
    };

    axios
      .post(`http://localhost:8000/api/store/payment`, payment)
      .then((res) => {
        swal({
          title:
            "You have successfully paid the bill, Your items will be dispatched soon",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        });
        setPaid(true);
      });
  };

  return (
    <div className="vh-100 store-container d-flex align-items-start justify-content-center">
      {!paid && (
        <div className="store-payment-form mt-4">
          <h3> Payment </h3>
          <p>
            Hey, We have recieved your order! Enter your credentials to proceed
            the payment
          </p>

          {error && <p className="text-danger"> {error} </p>}

          <div className="store-payment-paypal">
            <img src="https://i.ibb.co/37QxMHG/Daco-472332.png" alt="" />
          </div>

          <div class="col-12 mt-5">
            <label for="inputAddress" class="form-label">
              Enter your paypal email
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="user@paypal.com"
              value={paypalEmail}
              onChange={(e) => {
                setPaypalEmail(e.target.value);
              }}
            />

            <button
              type="button"
              onClick={onClick}
              className="btn store-order-form-button mt-3"
              id="product-details-buy-now"
            >
              Process Payment via Paypal
            </button>
          </div>

          <form class="row g-3 mt-5">
            <div class="col-md-5">
              <label for="inputEmail4" class="form-label">
                Card Number
              </label>
              <input
                value={creditCard}
                onChange={(e) => {
                  setCreditCard(e.target.value);
                }}
                type="email"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Expiration
              </label>
              <input
                value={expiration}
                onChange={(e) => {
                  setExpiration(e.target.value);
                }}
                type="text"
                class="form-control"
                id="inputPassword4"
              />
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                CVV
              </label>
              <input
                value={cvv}
                onChange={(e) => {
                  setCvv(e.target.value);
                }}
                type="text"
                class="form-control"
                id="inputPassword4"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Owner's Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="John Doe"
                value={owner}
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              />
            </div>

            <button
              type="button"
              onClick={onClick}
              id="product-details-buy-now"
              className="btn store-order-form-button"
            >
              Process Payment
            </button>
          </form>
        </div>
      )}

      {/*  */}

      <div className="d-flex flex-column">
        <div className="store-payment-form mt-4 mx-4">
          <div className="d-flex justify-content-between w-100">
            <div>
              <h5> Order ID </h5>
              <p> Total Amount </p>
              <p> Placed Date </p>
              <p> Payment Status </p>
            </div>

            <div>
              <h5> {order && order._id} </h5>
              <p> ${order && order.total} </p>
              <p> 2020/05/20 </p>
              {!paid && (
                <p className="badge bg-warning text-dark">
                  Awaiting for payment
                </p>
              )}
              {paid && (
                <p className="badge bg-success">
                  Payment recieved successfully
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="store-bought-product-item mx-4 mt-4 store-payment-form d-flex">
          <img src={product?.image} alt="fruit" />

          <div className="mx-4">
            <p> {product?.name} </p>
            <p> Quantity: {order?.quantity} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePaymentScreen;
