import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../../component/base/RequireAuth/requireAuth";
import Bag from "../../Page/Bag/Bag";
import Checkout from "../../Page/Checkout/Checkout";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login";
import LoginCustomer from "../../Page/Login/LoginCustomer";
import Product from "../../Page/Product/Product";
import Profile from "../../Page/Profile/Profile";
import Register from "../../Page/Register/Register";
import RegisterCustomer from "../../Page/Register/RegisterCustomer";
import EditProduct from "../../Page/StoreProfile/EditProduct";
import MyProduct from "../../Page/StoreProfile/MyProduct";
import Selling from "../../Page/StoreProfile/Selling";
import StoreProfile from "../../Page/StoreProfile/StoreProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginCustomer" element={<LoginCustomer />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterCustomer" element={<RegisterCustomer />} />
        <Route path="/StoreProfile/Selling" element={<Selling />} />
        <Route path="/Edit/:id" element={<EditProduct />} />
        {/* <Route path="/Product" element={<Product />} /> */}
        <Route path="/Product/:id" element={<Product />} />
        <Route
          path="/Mybag"
          element={
            <RequireAuth>
               <Bag />
            </RequireAuth>
          }
        ></Route>
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/StoreProfile" element={<StoreProfile />} />
        <Route path="/StoreProfile/myproduct" element={<MyProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
