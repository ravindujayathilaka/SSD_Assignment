import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Store.css";
import StoreProductSingle from "./StoreProductSingle";

const StoreProducts = () => {
  let params = useParams();
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/store/products/${params.category}`)
      .then((res) => {
        setProducts(res.data.products);
      });
  }, [params.category]);

  const onSearch = (e) => {
    const pName = e.target.value;

    if (pName === "") {
      axios
        .get(`http://localhost:8000/api/store/products/${params.category}`)
        .then((res) => {
          setProducts(res.data.products);
        });
    } else {
      const newProducts = products?.filter((p) =>
        p.name.toLowerCase().startsWith(pName)
      );

      setProducts(newProducts);
    }
  };

  return (
    <div className="store-container min-vh-100">
      <div className="latest-store-details-cover position-relative">
        <img src="https://i.ibb.co/rkfrhCm/banner18.webp" alt="" />
        <div className="store-products-top text-secondary position-absolute top-50 start-50 translate-middle">
          <p>
            Home > Products >
            {params.category.replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })}
          </p>
        </div>
      </div>

      <div className="store-search-bar45645461212 col-5 px-5">
        <input
          type="text"
          class="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Search for a product"
          onChange={onSearch}
        />
      </div>

      <div className="products-list row p-5">
        {products &&
          products.map((prod) => (
            <div className="col mt-4">
              <StoreProductSingle
                key={prod._id}
                img={prod.image}
                title={prod.name}
                price={prod.price}
                id={prod._id}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default StoreProducts;
