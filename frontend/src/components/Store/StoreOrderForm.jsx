import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const StoreOrderForm = () => {
  const { product: paramsProduct, quantity, price } = useParams();
  const [subTotal, setSubTotal] = useState("");
  const [delivery, setDelivery] = useState("");
  const [product, setProduct] = useState();
  const [user, setUser] = useState();
  const [valid, setValid] = useState([]);
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    product: "",
    quantity: "",
    total: "",
    user: "",
  });

  useEffect(() => {
    const subTotal = Number(quantity) * Number(price);
    const delivery = (subTotal * 6.5) / 100;

    setSubTotal(subTotal);
    setDelivery(delivery);

    setOrder((order) => {
      return {
        ...order,
        total: Number(subTotal + delivery),
        product: paramsProduct,
        quantity: quantity,
      };
    });

    axios
      .get(`http://localhost:8000/api/store/product/${paramsProduct}`)
      .then((res) => {
        setProduct(res.data.product);
      });
  }, [paramsProduct, price, quantity]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/current`, { withCredentials: true })
      .then((res) => {
        setUser(res.data);

        setOrder((order) => {
          return {
            ...order,
            user: res.data._id,
          };
        });
      })
      .catch((error) => {
        swal({
          title:
            "Sorry, You haven't login to the application, Please login to continue",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate("/login");
        });
      });
  }, []);

  const onFormChange = (e) => {
    const { name, value } = e.target;

    setOrder({
      ...order,
      [name]: value,
    });
  };

  const navigateToCheckout = (id) => {
    navigate(`/store/order/payment/${id}`);
  };

  const onSubmit = (e) => {
    setValid([]);

    e.preventDefault();

    const onlyLetters = /[a-zA-Z]+/;
    const onlyNumeric = /^\d+$/;

    if (order.firstName.length <= 0 || !onlyLetters.test(order.firstName)) {
      setValid((prev) => [...prev, "fNameError"]);
    }

    if (order.lastName.length <= 0 || !onlyLetters.test(order.lastName)) {
      setValid((prev) => [...prev, "lNameError"]);
    }

    if (order.address1.length <= 0 || !onlyLetters.test(order.firstName)) {
      setValid((prev) => [...prev, "ad1Error"]);
    }

    if (order.address2.length <= 0 || !onlyLetters.test(order.firstName)) {
      setValid((prev) => [...prev, "ad2Error"]);
    }

    if (order.city.length <= 0 || !onlyLetters.test(order.firstName)) {
      setValid((prev) => [...prev, "cityError"]);
    }

    if (order.state.length <= 0) {
      setValid((prev) => [...prev, "stateError"]);
    }
    if (order.zipCode.length <= 0 || !onlyNumeric.test(order.zipCode)) {
      setValid((prev) => [...prev, "zipError"]);
    }

    if (valid.length > 0) {
      return;
    } else {
      setValid([]);
    }

    e.preventDefault();
    axios
      .post("http://localhost:8000/api/store/orders", order)
      .then((res) => {
        swal({
          title:
            "Order created Successfully! Click Ok to navigate to payment page!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigateToCheckout(res.data._id);
        });
      })
      .catch((errr) => {
        console.log("Error");
      });
  };

  const demo = () => {
    setOrder({
      firstName: "Pasindu",
      lastName: "Prabhashitha",
      address1: "45/5",
      address2: "Mountain View",
      city: "California",
      state: "USA",
      zipCode: "11481",
      product: "625ebd8857dfb813960dbb1e",
      quantity: "1",
      total: "2.13",
      user: "625796e1c1d4278fec9bd2b4",
    });
  };

  return (
    <div className="p-5 store-container store-order-form-page d-flex align-items-start justify-content-center">
      <div className="store-form-outer-layer">
        <h3> Enter Shipping Details </h3>

        <p>
          Please enter your shipping details, We'll deliver your items to your
          doorstep
        </p>

        <hr />
        <form class="row g-3 mt-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class={`form-control ${
                valid.includes("fNameError") && "is-invalid"
              }`}
              value={order.firstName}
              name="firstName"
              onChange={onFormChange}
            />

            <div class="invalid-feedback">Please enter a valid name.</div>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class={`form-control ${
                valid.includes("lNameError") && "is-invalid"
              }`}
              value={order.lastName}
              name="lastName"
              onChange={onFormChange}
            />
            <div class="invalid-feedback">Please enter a valid last name.</div>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              placeholder="1234 Main St"
              value={order.address1}
              name="address1"
              onChange={onFormChange}
              class={`form-control ${
                valid.includes("ad1Error") && "is-invalid"
              }`}
            />
            <div class="invalid-feedback">
              {" "}
              Please enter a valid addressline.
            </div>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class={`form-control ${
                valid.includes("ad2Error") && "is-invalid"
              }`}
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              value={order.address2}
              name="address2"
              onChange={onFormChange}
            />
            <div class="invalid-feedback">
              Please enter a valid addressline.
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input
              type="text"
              class={`form-control ${
                valid.includes("cityError") && "is-invalid"
              }`}
              id="inputCity"
              value={order.city}
              name="city"
              onChange={onFormChange}
            />
            <div class="invalid-feedback">Please enter a valid city.</div>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <input
              type="text"
              class={`form-control ${
                valid.includes("stateError") && "is-invalid"
              }`}
              value={order.state}
              name="state"
              onChange={onFormChange}
              id="inputCity"
            />
            <div class="invalid-feedback">Please enter a valid state.</div>
          </div>

          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input
              type="text"
              value={order.zipCode}
              name="zipCode"
              onChange={onFormChange}
              id="inputCity"
              class={`form-control ${
                valid.includes("zipError") && "is-invalid"
              }`}
            />
            <div class="invalid-feedback">Please enter a valid zip code.</div>
          </div>
          <div class="col-12"></div>
          <div class="col-12">
            <button
              type="submit"
              onClick={onSubmit}
              class="btn store-order-form-button "
              id="product-details-buy-now"
            >
              Place Order
            </button>

            <button
              type="button"
              onClick={demo}
              class="btn store-order-form-button my-4"
              id="product-details-buy-now"
            >
              Demo
            </button>
          </div>
        </form>
      </div>

      <div className="store-bought-product mx-4">
        <div className="store-bought-product-item d-flex">
          <img src={product?.image} alt="fruit" />

          <div className="mx-4">
            <p> {product?.name} </p>
            <p> Quantity: {quantity} </p>
          </div>
        </div>

        <hr />

        <div className="pricing-store-area d-flex justify-content-between w-100">
          <div className="pricing-labels-store">
            <p> Subtotal </p>
            <p> Delivery Fee (6.5%) </p>
          </div>

          <div className="pricing-labels-store ">
            <p className="text-right"> $ {subTotal && subTotal} </p>
            <p> $ {delivery && delivery} </p>
          </div>
        </div>

        <hr />

        <div className="pricing-store-area d-flex justify-content-between w-100">
          <div className="pricing-labels-store">
            <p> Total </p>
          </div>

          <div className="pricing-labels-store">
            <p> ${order.total}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default StoreOrderForm;
