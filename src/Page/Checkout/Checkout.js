import React from "react";
import Card from "../../component/base/card";
import Navbar from "../../component/module/navbar";
import styles from "./checkout.module.css";
import Button from "../../component/base/Button";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { product } = useSelector((state) => state.bag);
  const {user} = useSelector((state)=> state.user)
  return (
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
                <p className={styles.address}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                <Button color="gray" backgroundColor="white" borderRadius="24px" className="p-2">
                  Choose another Address
                </Button>
              </Card>
              {product.map((item) => (
                <Card className={`${styles.card} px-5 py-3 mt-3`}>
                  <div className="table-responsive-sm">
                    <table className="table">
                      <tbody>
                        <td className="float-start">
                          <img className="img-products" src="./images/bag/jas.png" alt="fotoproduk1" />
                        </td>
                        <td className="align-middle float-start">
                          <p className="fw-bold mb-1">{item.name}</p>
                          <span className="text-secondary sub-post">{item.brand}</span>
                        </td>
                        <td className={"align-middle fw-bold"}>{item.brand}</td>
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
                        <td className="float-end fw-bold">$21.0</td>
                      </tr>
                      <tr className={styles.bottom}>
                        <td className={"float start " + styles.total_price}>Delivery</td>
                        <td className="float-end fw-bold">$21.0</td>
                      </tr>
                      <tr>
                        <td className={"float start fw-bold"}>Shipping Summary</td>
                        <td className="float-end fw-bold">$21.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Button backgroundColor="#DB3022" color="white" borderRadius="25px" className="w-100">
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
