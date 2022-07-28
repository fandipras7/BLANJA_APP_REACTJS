import React, { useEffect, useState } from "react";
import Navbar from "../../component/module/navbar";
import styles from "./profile.module.css";
import Button from "../../component/base/Button";
import Card from "../../component/base/card";
import style from "./order.module.css"
import { useSelector } from "react-redux";


import avaImg from "../image/profile/person.png";
import userImg from "../image/profile/user.png";
import addressImg from "../image/profile/address.png";
import orderImg from "../image/profile/order.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OrderDetail = () => {
    const { user } = useSelector((state) => state.user)
    const [orderDetail, setOrderDetail] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()



    const formatRp = (bilangan) => {
        if (bilangan) {
            var reverse = bilangan.toString().split('').reverse().join(''),
                ribuan = reverse.match(/\d{1,3}/g);
            ribuan = ribuan.join('.').split('').reverse().join('');
            return ribuan
        }
    }

    console.log(orderDetail);

    const getOrderDetail = async (id) => {
        try {
            const token = localStorage.getItem('token')
            const result = await axios.get(`${process.env.REACT_APP_API_BLANJA}/transaction/${id}`,
                {
                    "content-type": "multipart/form-data",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            setOrderDetail(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getOrderDetail(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // console.log(transaction);
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home="" /*onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)}*/></Navbar>
            <section id={styles["profile"]}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`${styles.sidebar} col-12 col-lg-3 text-center`}>
                            <div className={`${styles.menuHeader} d-flex justify-content-center mt-5`}>
                                <div className={styles.img_profile}>
                                    <img src={avaImg} className="img-fluid" alt="" />
                                </div>
                                <div>
                                    <p className="ms-4">{user.name}</p>
                                    {/* <span className="ms-2" onClick={onClickEdit}>Edit Profile</span> */}
                                </div>
                            </div>
                            <div className={styles.menu + " mt-5"}>
                                <div className={`d-flex`}>
                                    <Button onClick={() => navigate('/Profile')} backgroundColor="#456BF3" width="32px" height="32px" borderRadius="50%">
                                        <img className="mb-1" src={userImg} alt="bro" />
                                    </Button>
                                    <p className="ms-3">My Account</p>
                                </div>
                                <div className={`d-flex`}>
                                    <Button backgroundColor="#F36F45" width="32px" height="32px" borderRadius="50%">
                                        <img className="mb-1" src={addressImg} alt="bro" />
                                    </Button>
                                    <p className="ms-3">Shipping Address</p>
                                </div>
                                <div className={`d-flex`}>
                                    <Button  onClick={() => navigate('/Profile/Transaction')} backgroundColor="#F3456F" width="32px" height="32px" borderRadius="50%">
                                        <img className="mb-1" src={orderImg} alt="bro" />
                                    </Button>
                                    <p className="ms-3">My Order</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.form_column} col-12 col-lg-9`}>
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 mt-5">
                                    <Card className={styles.card + " p-4"}>
                                        <div className="row row-col">
                                            <div className="col-8 mt-5">
                                                <p className="mt-1">Item</p>
                                            </div>
                                            <div className="col mt-5">
                                                <p className="mt-1">Qty</p>
                                            </div>
                                            <div className="col mt-5">
                                                <p className="mt-1">Price</p>
                                            </div>
                                        </div>
                                        {orderDetail?.map((item) => (
                                            <div>
                                                <div className="row row-col">
                                                    <div className="col-8">
                                                        <h4 className="mt-5">{item?.nama_barang}</h4>
                                                    </div>
                                                    <div className="col mt-5">
                                                        <p className="mt-1">{item?.quantity}</p>
                                                    </div>
                                                    <div className="col mt-5">
                                                        <p className="mt-1">{item.price && `Rp.` + formatRp(item.price)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <hr className={style.hr} />
                                        <div className="row row-col">
                                            <div className="col-9">
                                                {/* <p className="mt-5">Amount</p> */}
                                            </div>
                                            <div className="col-3 mt-5">
                                                <p className="mt-1 text-end">{orderDetail && `Rp.` + formatRp(orderDetail[0]?.total_harga)}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderDetail;
