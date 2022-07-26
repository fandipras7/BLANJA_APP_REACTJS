import { React, useEffect } from "react";
import styles from "./profile.module.css";
import Navbar from "../../component/module/navbar";
import Card from "../../component/base/card";
import Button from "../../component/base/Button";
import sellingimg from "../image/profile/person.png";
import homeMenu from "../image/profile/homeMenu.png";
import productMenu from "../image/profile/package_1.png";
import orderMenu from "../image/profile/cart_min.png";
import searchbtn from "../image/profile/search.png";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getData, getMyProduct } from "../../config/redux/action/productAction";
const MyProduct = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const { myproduct } = useSelector((state) => state.product);
  // console.log(product);
  const navigate = useNavigate();
  // async function fetchData() {
  //   try {
  //     const result = await axios({
  //       method: "GET",
  //       baseURL: process.env.REACT_APP_API_BLANJA /*"http://localhost:4000/v1" */,
  //       url: /*`products?${searchParams}`*/ "/products?page=1&limit=10",
  //     });
  //     // console.log(result.data.data[5].photo);
  //     setProducts(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const deleteProduct = (id) => {
  //   axios.delete(`http://localhost:4000/v1/products/${id}`).then(() => {
  //     alert("delete success");
  //     navigate("/myproduct");
  //   });
  // };

  useEffect(() => {
    // fetchData();
    // setProducts(product);
    // dispatch(getData);
    dispatch(getMyProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                  <select onChange={
                      ()=>{navigate('/storeprofile')}
                    } className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                      <option value="store" selected>Store</option>
                      <option value="store" selected>Edit porfile</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className={"mb-4 " + styles.circle + " " + styles.product}>
                    <img src={productMenu} alt="menu" />
                  </div>
                  <div className={"mb-3 " + styles.select}>
                  <select onChange={
                      (e)=>{ e.target.value === 'selling' ? navigate('/storeprofile/selling') : navigate('/storeprofile/myproduct')}
                    } className="form-select form-select-lg mb-3" aria-label=".form-select-lg example ">
                      <option selected>Product</option>
                      <option value="myproduct">My products</option>
                      <option value="selling">Selling products</option>
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
                  <div className="col-12 col-lg-10 mt-5">
                    <Card className={styles.card + " p-4"}>
                      <h5>My Product</h5>
                      {/* <p>Manage your profile information</p> */}
                      <div className="row">
                        <div className="table-responsive-sm">
                          <table className="table">
                            <tbody className="">
                              <td className="float-start">
                                <p>All Items</p>
                              </td>
                              <td className="float-start ms-4">
                                <p>Sold Out</p>
                              </td>
                              <td className="float-start ms-4">
                                <p>Archived</p>
                              </td>
                              <hr className="w-100" />
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row position-relative">
                        <div>
                          <input className="ps-5 py-2 " type="text" name="search" id="search" placeholder="search" />
                          <Button border="none" className={"position-absolute " + styles.btn_search}>
                            <img src={searchbtn} alt="" />
                          </Button>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th className="col-8">Product Name</th>
                              <th className="col-2">Price</th>
                              <th className="col-2">Stock</th>
                            </tr>
                          </thead>
                          <tbody>
                            {myproduct?.length > 0 ? (
                              myproduct.map((item) => (
                                <tr>
                                  <th scope="row">{item.name}</th>
                                  <td>{item.price}</td>
                                  <td>{item.stock}</td>
                                  <div className="editDelete">
                                    <Button onClick={() => navigate(`/storeprofile/selling`)}>add</Button>
                                    <Button onClick={() => navigate(`/Edit/${item.id}`)}>Edit</Button>
                                    <Button onClick={() => dispatch(deleteProduct(item.id))}>Delete</Button>
                                  </div>
                                </tr>
                              ))
                            ) : (
                              <div>
                                <p>Belum ada produk</p>
                              </div>
                            )}
                            {/* {products.length > 0 ? (
                              products.map((item) => (
                                <tr>
                                  <th scope="row">{item.name}</th>
                                  <td>{item.price}</td>
                                  <td>{item.stock}</td>
                                  <div className="editDelete">
                                    <Button onClick={() => navigate(`/storeprofile/selling`)}>add</Button>
                                    <Button onClick={() => navigate(`/Edit/${item.id}`)}>Edit</Button>
                                    <Button onClick={() => dispatch(deleteProduct(item.id))}>Delete</Button>
                                  </div>
                                </tr>
                              ))
                            ) : (
                              <div>
                                <p>Belum ada produk</p>
                              </div>
                            )} */}
                            {/* <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                            </tr> */}
                          </tbody>
                        </table>
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

export default MyProduct;
