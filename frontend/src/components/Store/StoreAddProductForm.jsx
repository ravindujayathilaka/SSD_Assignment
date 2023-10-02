import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const StoreAddProductForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [smallDes, setSmallDes] = useState("");
  const [longDes, setLongDes] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const saveProduct = async (e) => {
    e.preventDefault();
    const product = {
      name,
      category,
      price,
      image: img,
      smallDes,
      longDes,
    };

    if (
      product.name.length <= 0 ||
      product.category.length <= 0 ||
      product.price.length <= 0 ||
      product.image.length <= 0 ||
      product.smallDes.length <= 0 ||
      product.longDes.length <= 0
    ) {
      setErrors(true);
      return;
    }

    axios
      .post("http://localhost:8000/api/store/products", product,{withCredentials: true})
      .then((response) => {
        swal({
          title: "Product Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(`/store/products/product/${response.data._id}`);
        });
      });
  };

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer">
        <h2 className="display-6"> Add Product to Store </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter the details of the new product
        </small>

        {errors && (
          <div className="text-danger mt-4 text-center">
            All the fields are required! Please fillout all the fields to add
            product to the store
          </div>
        )}

        <div className="store-add-product-form-inner  py-4">
          <form>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">Name</label>
              <input
                type="email"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-4">
              <label className="my-1">Category</label>
              <input
                type="text"
                className="form-control mb-2"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                placeholder="Category"
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Unit Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Unit Price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Image</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image"
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Small Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Small Description"
                value={smallDes}
                onChange={(e) => {
                  setSmallDes(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Long Description</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Long Description"
                value={longDes}
                onChange={(e) => {
                  setLongDes(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              id="product-details-buy-now"
              className="btn product-details-buy-now w-100"
              onClick={saveProduct}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StoreAddProductForm;
