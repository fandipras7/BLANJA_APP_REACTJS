import React, { useEffect, useState } from "react";
import Navbar from "../../component/module/navbar";
import styles from "./bag.module.css";
import Button from "../../component/base/Button";
import Card from "../../component/base/card";
import { useDispatch, useSelector } from "react-redux";
import { getMyCart } from "../../config/redux/action/bagAction";
import { useNavigate } from "react-router-dom";
import trashIcon from '../../assets/trash3.svg'
import axios from "axios";
// import { useNavigate } from 'react-router-dom'

const Bag = () => {
  const { mycart } = useSelector((state) => state.bag);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const [qty, setQty] = useState('0')
  let totalHarga = 0
  for (let i = 0; i < mycart.length; i++) {
    // setTotalPrice((current)=> current += mycart[i].price)
    totalHarga += mycart[i].price * mycart[i].qty
  }

  const addStock = (id) => {
    // try {
    // const token = localStorage.getItem('token')
    axios.put(`${process.env.REACT_APP_API_BLANJA}/cart/add/${id}`)
      .then(() => {
        setQty((cureent) => cureent++)
        console.log('then jalan');
        dispatch(getMyCart())
      })
      .catch((error) => {
        console.log(error);
      })
    // )
    // setQty(1)
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const deleteCart = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BLANJA}/cart/${id}`, {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setQty(1)
    } catch (error) {
      console.log(error);
    }
  }

  const decreaseStock = (id) => {
    // const token = localStorage.getItem('token')
    //  console.log(token);
    axios.put(`${process.env.REACT_APP_API_BLANJA}/cart/decrease/${id}`)
      .then(() => {
        setQty((cureent) => cureent++)
        console.log('then jalan');
        dispatch(getMyCart())
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan
  }

  useEffect(() => {
    dispatch(getMyCart());
    console.log('apakah useEffect jalan');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home="" /*onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)}*/></Navbar>
      <section>
        <div class={"container " + styles.myBag}>
          <p className="fw-bold fs-3">My bag</p>
          <div className="row">
            <div className="col-lg-8">
              <div className={`mb-3 ${styles.select_all} ${styles.card} px-4`}>
                <div className="table-responsive-sm">
                  <table className="table mt-3">
                    <tbody>
                      <td className="me-5">
                        <div className={styles.check_select}>
                          <label className={styles.customcheck + " ms-2"}>
                            <p className="select-item ms-4">
                              Select all items <span className="text-secondary">(2 items selected)</span>
                            </p>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <span className={styles.checkmak}></span>
                          </label>
                        </div>
                      </td>
                      {/* <td className={"text-right " + styles.delete}>Delete</td> */}
                    </tbody>
                  </table>
                </div>
              </div>

              {mycart &&
                mycart.map((item) => (
                  <div className="card mb-3 px-4">
                    <div className="table-responsive-sm">
                      <table className="table">
                        <tbody>
                          <td className="align-middle">
                            <div className={`${styles.check}`}>
                              <label className={styles.customcheck + " mt-2 input"}>
                                {/* <!-- <img className="img-products" src="../image/bag2.png"/> --> */}
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <span className={styles.checkmark}></span>
                              </label>
                            </div>
                          </td>
                          <td className="float-start">
                            <div style={{ width: '150px' }}>
                              <img className="img-fluid" src={item.photo} alt="fotoproduk1" />
                            </div>
                          </td>
                          <td className="align-middle float-start">
                            <p className="post mb-1">{item.name}</p>
                            <span className="text-secondary sub-post">{item.brand}</span>
                          </td>
                          <td className="align-middle text-center">
                            <Button
                              // onClick={() => {
                              //   item.qtyOrder <= 1 ? dispatch(deleteProdct(item.id)) : dispatch(minQty(item.id, item.qtyOrder - 1));
                              //   setTotalPrice(totalPrice + item.qtyOrder * item.price);
                              // }}
                              onClick={() => {
                                decreaseStock(item.id)

                              }}
                              backgroundColor="#d4d4d4"
                              width="36px"
                              height="36px"
                              borderRadius="50%"
                            >
                              <img className="mb-2" src="./images/bag/min.png" alt="btn" />
                            </Button>
                          </td>
                          <td className={"align-middle text-center " + styles.one}>{item.qty}</td>
                          <td className="align-middle text-center">
                            <Button
                              // onClick={() => {
                              //   dispatch(addPlus(item.id, item.qtyOrder + 1));
                              // }}
                              onClick={() => {
                                addStock(item.id)

                              }}
                              backgroundColor="white"
                              width="36px"
                              height="36px"
                              borderRadius="50%"
                            >
                              <img className="mb-2" src="./images/bag/shape.png" alt="btn" />
                            </Button>
                          </td>
                          <td className={"align-middle fw-bold"}>{`Rp. ` + formatRp(item.price * item.qty)}</td>
                          <Button onClick={() => {
                            deleteCart(item.id)

                          }} border="none">
                            <img src={trashIcon} alt="" />
                          </Button>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              {/* <div className="card mb-3 px-4">
                <div className="table-responsive-sm">
                  <table className="table">
                    <tbody>
                      <td className="align-middle">
                        <div className={styles.check}>
                          <label className={styles.customcheck + " mt-2 input"}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <span className={styles.checkmark}></span>
                          </label>
                        </div>
                      </td>
                      <td className="float-start">
                        <img className="img-products" src="./images/bag/jacket.png" alt="" />
                      </td>
                      <td className="align-middle float-start">
                        <p className="post mb-1">Men's formal suit -</p>
                        <span className="text-secondary sub-post">Zalora Cloth</span>
                      </td>
                      <td className="align-middle text-center">
                        <Button backgroundColor="#d4d4d4" width="36px" height="36px" borderRadius="50%">
                          <img className="mb-2" src="./images/bag/min.png" alt="btn" />
                        </Button>
                      </td>
                      <td className={"align-middle text-center " + styles.one}>1</td>
                      <td className="align-middle text-center">
                        <Button backgroundColor="white" width="36px" height="36px" borderRadius="50%">
                          <img className="mb-2" src="./images/bag/shape.png" alt="btn" />
                        </Button>
                      </td>
                      <td className={"align-middle fw-bold"}>$ 20.0</td>
                    </tbody>
                  </table>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4 mt-3">
              <Card className={`${styles.card} ${styles.card_details}`}>
                <h3 className="title-shoping">Shopping Summary</h3>
                <div className="table-responsive-sm mt-4">
                  <table className="table">
                    <tbody>
                      <td className={"float start " + styles.total_price}>Total Price</td>
                      <td className="float-end fw-bold">{`Rp. ` + formatRp(totalHarga)}</td>
                    </tbody>
                  </table>
                </div>
                <Button
                  onClick={() => {
                    navigate("/checkout");
                  }}
                  backgroundColor="#DB3022"
                  color="white"
                  borderRadius="25px"
                  className="w-100"
                >
                  Buy
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bag;
