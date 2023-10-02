import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import "./App.css";
//import "./components/educationComponents/Educationstyle.css"
//import "./App.css";
import "./App.css";
//import "./components/HealthCare/Health.css";

//import Header from "./components/Header";
import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";
//import Courseadmin from "./components/educationComponents/Courseadmin";


// Store Components
import StoreHome from "./components/Store/StoreHome";
import StoreProducts from "./components/Store/StoreProducts";
import StoreProductsDetails from "./components/Store/StoreProductsDetails";
import StoreOrderForm from "./components/Store/StoreOrderForm";
import StoreAddProductForm from "./components/Store/StoreAddProductForm";

// Products Components
import AddProduct from "./components/Product/Product_Manager/AddProduct";
import AllProducts from "./components/Product/Product_Manager/AllProducts";
import CompanyRequest from "./components/Product/User_Company/CompanyRequests";
import AllCompanyRequest from "./components/Product/User_Company/AllCompanyRequest";
import UpdateProducts from "./components/Product/Product_Manager/UpdateProducts";
import StockDetails from "./components/Product/Product_Manager/StockDetails";
import ProductBill from "./components/Product/User_Company/ProductBill";
import CompanyHomePage from "./components/Product/User_Company/CompanyHomePage";
import PriceCalculator from "./components/Product/User_Company/PriceCalculator";

// Ads Components


/*CareerManagement*/



// Appointments Components - Healthcare


// // Lab Components


//Lab components

//import DeleteReport from "./components/labComponent/DeleteReport";

// User Components
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";

//Store Components
import StorePaymentScreen from "./components/Store/StorePaymentScreen";
import StoreAdminProductsEdit from "./components/Store/StoreAdminProductsEdit";
import StoreAdminProducts from "./components/Store/StoreAdminProducts";
import StoreAdminOrders from "./components/Store/StoreAdminOrders";
import StoreAdminPayments from "./components/Store/StoreAdminPayments";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
              
          {/* Health Care Appointments Routes */}

        {/* Store Routes */}
        <Route path="/store" element={<StoreHome />} />
        <Route path="/store/products/:category" element={<StoreProducts />} />
        <Route
          path="/store/products/product/:id"
          element={<StoreProductsDetails />}
        />
        <Route
          path="/store/order/store-order-create/:product/:quantity/:price"
          element={<StoreOrderForm />}
        />
        <Route
          path="/store/order/payment/:orderId"
          element={<StorePaymentScreen />}
        />
        <Route
          path="/store/product/add-product"
          element={<StoreAddProductForm />}
        />
        <Route
          path="/store/store-admin-products"
          element={<StoreAdminProducts />}
        />
        <Route
          path="/store/store-admin-orders"
          element={<StoreAdminOrders />}
        />
        <Route
          path="/store/store-admin-payments"
          element={<StoreAdminPayments />}
        />
        <Route
          path="/store/store-admin-products/edit/:pid"
          element={<StoreAdminProductsEdit />}
        />
       
        {/*Product Routes*/}
        <Route path="/productadd" element={<AddProduct />} />
        <Route path="/productSee" element={<AllProducts />} />
        <Route path="/companyadd" element={<CompanyRequest />} />
        <Route path="/companySee" element={<AllCompanyRequest />} />
        <Route
          path="/productUpdate/:id/:name/:quantity"
          element={<UpdateProducts />}
        />
        <Route path="/stock" element={<StockDetails />} />
        <Route path="/productBill" element={<ProductBill />} />
        <Route path="/companyHome" element={<CompanyHomePage />} />
        <Route path="/priceCal" element={<PriceCalculator />} />

        {/* Users */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
