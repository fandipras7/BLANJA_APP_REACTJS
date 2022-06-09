import React, { useState } from "react";
import styles from "./logincust.module.css";
import logoBlanja from "../image/logoBlanja.png";
import Button from "../../component/base/Button";
import Input from "../../component/base/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../config/redux/action/userAction";

const LoginCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch(loginSeller(formLogin, navigate));
    dispatch(loginUser(formLogin, navigate));
  };
  // console.log(formLogin);
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="d-flex justify-content-center mb-4">
              <img src={logoBlanja} alt="" />
              <h4 className="mt-3 fw-bold">Blanja</h4>
            </div>
            <p className="text-center fw-bold">Please Login with your account</p>
            <div className="buttons text-center mb-4">
              <div>
                <Button title="Customer" className={styles.cs} onClick={() => navigate("/LoginCustomer")}></Button>
                <Button title="Seller" className={styles.sl} onClick={() => navigate("/Login")}></Button>
              </div>
            </div>
            <p className="text-end text-danger">Forgot password?</p>
            <form onSubmit={handleLogin}>
              <Input name="email" onChange={handleChange} classWrapName="form-outline mb-4" type="email" id="email" className="form-control form-control-lg" placeholder="Email"></Input>
              <Input name="password" onChange={handleChange} classWrapName="form-outline mb-4" type="password" id="password" className="form-control form-control-lg" placeholder="Password"></Input>
              <div className="d-grid">
                <Button title="Login" className={styles.btnSubmit} border="none"></Button>
              </div>
            </form>
            <p className="text-center mt-3">
              Don't Have Tokopedia Account?{" "}
              <span onClick={() => navigate("/Register")} id="register" className="text-danger">
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginCustomer;
