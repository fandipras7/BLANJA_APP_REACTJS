import React, { useState } from "react";
import Card from "../../component/base/card";
import Navbar from "../../component/module/navbar";
import styles from "./checkout.module.css";
import Button from "../../component/base/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  // const [qty, setQty] = useState()
  const { mycart } = useSelector((state) => state.bag);
  const { user } = useSelector((state) => state.user)
  const [provider, setProvider] = useState('BRI')
  const navigate = useNavigate()

  let totalHarga = 0
  for (let i = 0; i < mycart.length; i++) {
    // setTotalPrice((current)=> current += mycart[i].price)
    totalHarga += mycart[i].price * mycart[i].qty
  }
  const product = mycart.map((item) => {
    return {
      id: item.product_id,
      quantity: item.qty
    }
  })

  const dataOrder = {
    provider,
    amount: totalHarga,
    product
  }

  const createOrder = async (data) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${process.env.REACT_APP_API_BLANJA}/transaction`, data, {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      Swal.fire({
        icon: "success",
        text: "Order Success"
      })
      navigate('/profile/transaction')
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "Order Failed"
      })
    }
  }

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan
}

  console.log(provider);
  return (

    // useEffect(()=>{
    //   setQty
    // })
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home="" /*onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)}*/></Navbar>
      <section id={styles["checkout"]}>
        <div className="container mt-5">
          <h3 className="fw-bold">Checkout</h3>
          <p className="fw-bold mt-5">Shipping Address</p>
          <div className="row">
            <div className="col-lg-8">
              <Card className={`${styles.card} p-5`}>
                <p className="fw-bold">{user.name}</p>
                <p className={styles.address}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Blanja Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                <Button color="gray" backgroundColor="white" borderRadius="24px" className="p-2">
                  Choose another Address
                </Button>
              </Card>
              {mycart.map((item) => (
                <Card className={`${styles.card} px-5 py-3 mt-3`}>
                  <div className="table-responsive-sm">
                    <table className="table">
                      <tbody>
                        <td className="float-start">
                          <div style={{ width: '150px' }}>
                            <img className="img-fluid" src={item.photo} alt="fotoproduk1" />
                          </div>
                        </td>
                        <td className="align-middle float-start">
                          <p className="fw-bold mb-1">{item.name}</p>
                          <span className="text-secondary sub-post">{item.brand}</span>
                        </td>
                        <td className={"align-middle fw-bold"}>{`Rp. ` + formatRp(item.qty * item.price)}</td>
                      </tbody>
                    </table>
                  </div>
                </Card>
              ))}
              {/* <Card className={`${styles.card} px-5 py-3 mt-3`}>
                <div className="table-responsive-sm">
                  <table className="table">
                    <tbody>
                      <td className="float-start">
                        <img className="img-products" src="./images/bag/jacket.png" alt="fotoproduk1" />
                      </td>
                      <td className="align-middle float-start">
                        <p className="fw-bold mb-1">Men's formal suit -</p>
                        <span className="text-secondary sub-post">Zalora Cloth</span>
                      </td>
                      <td className={"align-middle fw-bold"}>$ 20.0</td>
                    </tbody>
                  </table>
                </div>
              </Card> */}
            </div>
            <div className="col-lg-4">
              <Card className={`${styles.card} p-3`}>
                <p className="fw-bold">Shopping Summary</p>
                <div className="table-responsive-sm mt-4">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td className={"float start " + styles.total_price}>Order</td>
                        <td className="float-end fw-bold">{`Rp. ` + formatRp(totalHarga)}</td>
                      </tr>
                      <tr className={styles.bottom}>
                        <td className={"float start " + styles.total_price}>Delivery</td>
                        <td className="float-end fw-bold">Free Ongkir</td>
                      </tr>
                      <tr>
                        <td className={"float start fw-bold"}>Shipping Summary</td>
                        <td className="float-end fw-bold">{`Rp. ` + formatRp(totalHarga)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <select onChange={(e)=>{setProvider(e.target.value)}} className="form-select w-100 mt-1 mb-2" >
                          <option>Select Payment</option>
                          <option value="BRI">BRI</option>
                          <option value="BCA">BCA</option>
                          <option value="Mandiri">Mandiri</option>
                          <option value="OVO">OVO</option>
                          <option value="CIMB NIAGA">CIMB NIAGA</option>
                        </select>
                </div>
                <Button onClick={
                  () => { createOrder(dataOrder) }
                } backgroundColor="#DB3022" color="white" borderRadius="25px" className="w-100">
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

export default Checkout;
