import React, { useEffect, useState } from "react";
import Navbar from "../../component/module/navbar";
import styles from "./profile.module.css";
import Button from "../../component/base/Button";
import Card from "../../component/base/card";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'

import avaImg from "../image/profile/person.png";
import userImg from "../image/profile/user.png";
import addressImg from "../image/profile/address.png";
import orderImg from "../image/profile/order.png";
import { getMyTransaction } from "../../config/redux/action/transaction";
import { useNavigate } from "react-router-dom";

const Myorder = () => {
    const { user } = useSelector((state) => state.user)
    const { myTransaction } = useSelector((state) => state.order)
    const [transaction, setTransaction] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClickOrder = (id)=>{
        navigate(`/Profile/OrderDetail/${id}`)
    }

    // console.log(transaction.provider);

    // const formatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'RP',
    //     minimumFractionDigits: 2
    //   })

    const formatRp = (bilangan) => {
        var reverse = bilangan.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan
    }


    useEffect(() => {
        dispatch(getMyTransaction())
        // setTransaction(myTransaction)
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
                                    <Button onClick={() => navigate('/Profile/Transaction')} backgroundColor="#F3456F" width="32px" height="32px" borderRadius="50%">
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
                                        <h5>All Transaction</h5>
                                    </Card>
                                    {myTransaction.map((item) => (
                                        <Card className={styles.card + ` p-1 mt-3`}>
                                            <span>{moment(item.creted_at).format('dddd, MMMM, YYYY')}</span>
                                            <div className="d-flex ps-5">
                                                <div className="mt-1 me-5">
                                                    <p>Payment Method: <br />
                                                        <span className="fw-bold">{item.provider}</span>
                                                    </p>
                                                    {/* <span>{item.provider}</span> */}
                                                </div>
                                                <div className="mt-1 me-5">
                                                    <p>Status: <br />
                                                        <span className="fw-bold">{item.status === "Belum Bayar" && 'Waiting for payment'}</span>
                                                    </p>
                                                    {/* <span>{item.provider}</span> */}
                                                </div>
                                                <div className="mt-1">
                                                    <p>Amount: <br />
                                                        <span className="fw-bold">{`Rp. ${formatRp(item.amount)}`}</span>
                                                    </p>
                                                    {/* <span>{item.provider}</span> */}
                                                </div>

                                            </div>
                                            <Button onClick= {()=>{onClickOrder(item.order_id)}} className="ms-5">Detail Order</Button>
                                            {/* <p>{transaction.status}</p> */}
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Myorder;
