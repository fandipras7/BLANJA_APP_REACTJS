import React from "react";
import Navbar from "../../component/module/navbar";
import styles from "./profile.module.css";
import Button from "../../component/base/Button";
import Card from "../../component/base/card";

const Profile = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home="" /*onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)}*/></Navbar>
      <section id={styles["profile"]}>
        <div className="container-fluid">
          <div className="row">
            <div className={`${styles.sidebar} col-12 col-lg-3 text-center`}>
              <div className={`${styles.menuHeader} d-flex justify-content-center mt-5`}>
                <div className={styles.img_profile}>
                  <img src="./images/profile/ava1.png" className="img-fluid" alt="" />
                </div>
                <div>
                  <p className="ms-4">Johanes Mikael</p>
                  <span>Edit Profile</span>
                </div>
              </div>
              <div className={styles.menu + " mt-5"}>
                <div className={`d-flex`}>
                  <Button backgroundColor="#456BF3" width="32px" height="32px" borderRadius="50%">
                    <img className="mb-1" src="./images/profile/user.png" alt="bro" />
                  </Button>
                  <p className="ms-3">My Account</p>
                </div>
                <div className={`d-flex`}>
                  <Button backgroundColor="#F36F45" width="32px" height="32px" borderRadius="50%">
                    <img className="mb-1" src="./images/profile/address.png" alt="bro" />
                  </Button>
                  <p className="ms-3">Shipping Address</p>
                </div>
                <div className={`d-flex`}>
                  <Button backgroundColor="#F3456F" width="32px" height="32px" borderRadius="50%">
                    <img className="mb-1" src="./images/profile/order.png" alt="bro" />
                  </Button>
                  <p className="ms-3">My Order</p>
                </div>
              </div>
            </div>
            <div className={`${styles.form_column} col-12 col-lg-9`}>
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
              {/* <div class="card mt-3">
                <div class="card-body">
                  <h3 class="title-profil">My Profile</h3>
                  <p class="sub-profil text-secondary">Manage your profile information</p>
                  <hr />
                  <div class="row">
                    <div class="col-sm-9">
                      <div class="mb-3 mt-1 row">
                        <label for="Name" class="col-sm-3 col-form-label text-end text-form">
                          Name
                        </label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" value="Johanes Mikael" />
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label for="email" class="col-sm-3 col-form-label text-end text-form">
                          Email
                        </label>
                        <div class="col-sm-8">
                          <input type="email" class="form-control" value="johanes@gmail.com" />
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label for="phoneNumber" class="col-sm-3 col-form-label text-end text-form">
                          Phone number
                        </label>
                        <div class="col-sm-8">
                          <input type="number" class="form-control" id="inputPassword" value="08901289012" />
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label for="gender" class="col-sm-3 col-form-label text-end text-form">
                          Gender
                        </label>
                        <div class="col-sm-8">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label text-secondary" for="flexRadioDefault1">
                            Laki-laki
                          </label>
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label text-secondary" for="flexRadioDefault1">
                            Perempuan
                          </label>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label for="inputPassword" class="col-sm-3 col-form-label text-end text-form">
                          Date of birth
                        </label>
                        <div class="col-sm-2">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>1</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <div class="col-sm-3">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Januari</option>
                            <option value="1">Febuari</option>
                            <option value="2">Maret</option>
                            <option value="3">April</option>
                          </select>
                        </div>
                        <div class="col-sm-3">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>1990</option>
                            <option value="1">1991</option>
                            <option value="2">1992</option>
                            <option value="3">1993</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <div class="col-sm-9">
                          <button type="button" class="btn btn-submit">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3 image-profil text-center">
                      <img src="../image/profil-avatar.png" class="rounded-circle" alt="" />
                      <div class="select-avatar mt-3">
                        <button class="btn btn-select-profil">Select image</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
