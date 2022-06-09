import React from "react";
import Navbar from "../../component/module/navbar";
import styles from "./storeprofile.module.css";
import Card from "../../component/base/card";
import Button from "../../component/base/Button";
import sellingimg from "../image/profile/person.png";
import homeMenu from "../image/profile/homeMenu.png";
import productMenu from "../image/profile/package_1.png";
import orderMenu from "../image/profile/cart_min.png";

const StoreProfile = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home=""></Navbar>
      <main>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className={"col-12 col-xl-4 text-end position-relative " + styles.menu}>
                <div className={"d-flex " + styles.menuHeader + " ms-5 mt-5 justify-content-center"}>
                  <div>
                    <img src={sellingimg} alt="fp" />
                  </div>
                  <div className="name d-flex flex-column ms-2">
                    <p className="">Johanes Mikael</p>
                    <i className="bi bi-pencil">
                      <p className="">Edit Profile</p>
                    </i>
                  </div>
                </div>
                <div className="d-flex mt-5 align-items-center justify-content-center">
                  <div className={"mb-3 " + styles.circle + " " + styles.store}>
                    <img src={homeMenu} alt="" />
                  </div>
                  <div className={styles.select}>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                      <option selected>Store</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className={"mb-4 " + styles.circle + " " + styles.product}>
                    <img src={productMenu} alt="menu" />
                  </div>
                  <div className={"mb-3 " + styles.select}>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example ">
                      <option selected>Product</option>
                      <option value="1">My products</option>
                      <option value="2">Selling products</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className={"mb-3 " + styles.circle + " " + styles.order}>
                    <img src={orderMenu} alt="" />
                  </div>
                  <div className={styles.select}>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                      <option selected>Order</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 bg-light column-form">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 mt-5">
                    <Card className={styles.card + " p-4"}>
                      <h5>My Profile</h5>
                      <p>Manage your profile information</p>
                      <hr className="w-100" />
                      <div className="row">
                        <div className="col-9">
                          <div className="mb-3 mt-1 row">
                            <label for="Name" className="col-sm-3 col-form-label text-start">
                              Name
                            </label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" value="Johanes Mikael" />
                            </div>
                          </div>
                          <div className="mb-3 mt-1 row">
                            <label for="Name" className="col-sm-3 col-form-label text-start">
                              Email
                            </label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" value="Johanes@gmail.com" />
                            </div>
                          </div>
                          <div className="mb-3 mt-1 row">
                            <label for="Name" className="col-sm-3 col-form-label text-start">
                              Phone Number
                            </label>
                            <div className="col-sm-8">
                              <input type="text" className="form-control" value="0818098131" />
                            </div>
                          </div>
                          <div class="mb-4 row">
                            <label for="gender" className="col-sm-3 col-form-label text-start">
                              Gender
                            </label>
                            <div className="col-sm-8 my-auto">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label text-secondary" for="flexRadioDefault1">
                                Laki-laki
                              </label>
                              <input className="form-check-input ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label text-secondary" for="flexRadioDefault1">
                                Perempuan
                              </label>
                            </div>
                          </div>
                          <div className="mb-4 row">
                            <label for="inputPassword" className="col-sm-3 col-form-label text-start text-form">
                              Date of birth
                            </label>
                            <div className="col-sm-2">
                              <select className="form-select" aria-label="Default select example">
                                <option selected>1</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <select className="form-select" aria-label="Default select example">
                                <option selected>Januari</option>
                                <option value="1">Febuari</option>
                                <option value="2">Maret</option>
                                <option value="3">April</option>
                              </select>
                            </div>
                            <div className="col-sm-3">
                              <select className="form-select" aria-label="Default select example">
                                <option selected>1990</option>
                                <option value="1">1991</option>
                                <option value="2">1992</option>
                                <option value="3">1993</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-6 text-start">
                              <Button className="p-1 me-4" borderRadius="25px" backgroundColor="#DB3022" width="100px" color="white">
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 border-start border-success text-center h-50">
                          <div>
                            <img src="./images/profile/ava1.png" className="rounded-circle img-fluid" alt="" />
                          </div>
                          <div class="select-avatar mt-3">
                            <Button className="" color="gray" backgroundColor="white" borderRadius="25px">
                              Select Image
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StoreProfile;
