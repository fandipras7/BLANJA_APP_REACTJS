import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../component/module/navbar";
import styles from "./editProduct.module.css";
import axios from "axios";

const EditProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [dataProduct, setDataProduct] = useState({
    name: "",
    price: "",
    stock: "",
    condition: "",
    description: "",
  });

  const handleChange = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadio = (e) => {
    setDataProduct({
      ...dataProduct,
      condition: e.target.value,
    });
    // console.log(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleUpdate = (e) => {
    console.log(dataProduct);
    e.preventDefault();
    axios.put(`http://localhost:4000/v1/products/${id}`, dataProduct)
    .then((res)=>{
      console.log(res.data);
      navigate(`/Product/${id}`)
    })
    .catch((e)=>{
      alert(e.reponse.data.message)
    })
  };
  const [products, setProducts] = useState([]);
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        baseURL: "http://localhost:4000/v1",
        url: `/products/${id}`
      });
      // console.log(result.data.data[5].photo);
      setProducts(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home=""></Navbar>
      <main>
        <section>
          <div className="container-fluid">
            <div className="row">
              <form onSubmit={handleUpdate}>
                <div className={"col-4 col-xl-4 text-end position-relative " + styles.menu}>
                  <div className={"d-flex " + styles.menuHeader + " ms-5 mt-5 justify-content-center"}>
                    <div>
                      <img src="./images/selling/person.png" alt="fp" />
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
                      <img src="./images/selling/homeMenu.png" alt="" />
                    </div>
                    <div className={styles.select}>
                      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Store</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className={"mb-4 " + styles.circle + " " + styles.product}>
                      <img src="./images/selling/package_1.png" alt="menu" />
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
                      <img src="./images/selling/cart_min.png" alt="" />
                    </div>
                    <div className={styles.select}>
                      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Order</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 bg-light column-form">
                  <div className="form-seller d-flex flex-column ms-5 mt-5">
                    <div className="card" id="inventory">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p className="fw-bold mt-2">Inventory</p>
                        </li>
                        <li className="list-group-item">
                          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                            <span className="fw-light">Name Of Goods</span>
                          </label>
                          <div className="col-sm-4">
                            <input type="text" className="form-control" name="name" id="productName" placeholder={products.name} onChange={handleChange} />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card mt-3" id="item-details">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p className="fw-bold mt-2">Item details</p>
                        </li>
                        <li className="list-group-item">
                          <label for="unitprice" className="col-sm-2 col-form-label">
                            <span className="fw-light">Unit Price</span>
                          </label>
                          <div className="col-sm-4">
                            <input type="text" className="form-control" name="price" id="price" placeholder={products.price} onChange={handleChangeNumber} />
                          </div>
                          <label for="stock" className="col-sm-2 col-form-label">
                            <span className="fw-light">Stock</span>
                          </label>
                          <div className="col-sm-4">
                            <input type="text" placeholder={products.stock} className="form-control" name="stock" id="stock" onChange={handleChangeNumber} />
                          </div>
                          <label for="stock" className="col-sm-2 col-form-label">
                            <span className="fw-light">Stock</span>
                          </label>
                          <div className="col-sm-4">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" checked id="inlineRadio1" value="Baru" onClick={handleRadio} />
                              <label className="form-check-label" for="inlineRadio1">
                                Baru
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" checked id="inlineRadio2" value="Bekas" onClick={handleRadio} />
                              <label className="form-check-label" for="inlineRadio2">
                                Bekas
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card mt-3" id="photgoods">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p className="fw-bold mt-2">Photo Of Goods</p>
                        </li>
                        <div className="col-11 mt-3 mx-auto">
                          <div className="d-flex flex-column frame-photo">
                            <div className="d-flex align-items-center">
                              <div className={"col-3 justify-content-center align-items-center ms-3 mt-5 mb-5 " + styles.main_photo}>
                                <div>
                                  <img className="mx-auto img-fluid" src="./images/selling/boxPhoto.png" alt="" />
                                </div>
                                <p id={styles["maintext"]} className="fw-light">
                                  Foto Utama
                                </p>
                              </div>
                              <div className={"col-2 justify-content-center align-items-center ms-2 " + styles.others_photo}>
                                <div>
                                  <img className="mx-auto" src="./images/selling/boxPhoto.png" alt="" />
                                </div>
                              </div>
                              <div className={"col-2 justify-content-center align-items-center ms-2 " + styles.others_photo}>
                                <div>
                                  <img className="mx-auto" src="./images/selling/boxPhoto.png" alt="" />
                                </div>
                              </div>
                              <div className={"col-2 justify-content-center align-items-center ms-2 " + styles.others_photo}>
                                <div>
                                  <img className="mx-auto" src="./images/selling/boxPhoto.png" alt="" />
                                </div>
                              </div>

                              <div className={"col-2 justify-content-center align-items-center ms-2 " + styles.others_photo}>
                                <div>
                                  <img className="mx-auto" src="./images/selling/boxPhoto.png" alt="" />
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-center">
                              <button type="button" className="btnUpdate btn-light rounded-pill">
                                Update Photo
                              </button>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                    <div className="card mt-5" id="descirpiton">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p className="fw-bold mt-2">Description</p>
                        </li>
                        <div className="card mt-3 ms-3">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              <img src="Screenshot (86) 1.png" alt="" />
                            </li>
                            <li className="list-group-item">
                              <input type="text" className="form-control" style={{ height: "250px" }} name="description" id="description" placeholder={products.description} onChange={handleChange} />
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                    <div className="text-end mt-3">
                      <button type="su" className="btn btn-danger rounded-pill">
                        Jual
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditProduct;
