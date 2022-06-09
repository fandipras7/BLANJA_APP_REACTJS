import React, { useState } from "react";
import styles from "./registercust.module.css";
import Button from "../../component/base/Button";
import Input from "../../component/base/Input";
import logoBlanja from "../image/logoBlanja.png";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../helper/addDataRegister";

const RegisterCustomer = () => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
    // phoneNumber: "",
    // storeName: "",
  });
  console.log(formRegister);
  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    // sellerRegister(formRegister, navigate);
    userRegister(formRegister, navigate);
  };
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="d-flex justify-content-center mb-4">
              <img src={logoBlanja} alt="logo" />
              <h4 className="mt-3 fw-bold">Blanja</h4>
            </div>
            <p className="text-center fw-bold">Please Login with your account</p>

            <div className="buttons text-center mb-4">
              <div className="btn-group">
                <Button title="Customer" className={styles.cs}></Button>
                <Button title="Seller" className={styles.sl} onClick={() => navigate("/Register")}></Button>
              </div>
            </div>
            <p className="text-end">Forgot password?</p>
            <form onSubmit={handleRegister}>
              <Input name="name" value={formRegister.name} onChange={handleChange} type="text" classWrapName="form-outline mb-2" id="name" className="form-control form-control-lg" placeholder="name"></Input>
              <Input name="email" value={formRegister.email} onChange={handleChange} classWrapName="form-outline mb-2" type="email" id="email" className="form-control form-control-lg" placeholder="email"></Input>
              {/* <Input name="phoneNumber" value={formRegister.phoneNumber} onChange={handleChange} classWrapName="form-outline mb-2" type="text" id="phone" className="form-control form-control-lg" placeholder="Phone Number"></Input>
              <Input name="storeName" value={formRegister.storeName} onChange={handleChange} classWrapName="form-outline mb-2" type="text" id="store" className="form-control form-control-lg" placeholder="Store Name"></Input> */}
              <Input name="password" value={formRegister.password} onChange={handleChange} classWrapName="form-outline mb-4" type="password" id="password" className="form-control form-control-lg" placeholder="Password"></Input>
              <div className="d-grid">
                <Button title="Sign Up" width="none" className={`btn btn-danger ${styles.btnSubmit}`}></Button>
              </div>
            </form>
            <p className="text-center mt-3">
              Already have a Tokopedia account?{" "}
              <span onClick={() => navigate("/Login")} className="text-danger">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterCustomer;
