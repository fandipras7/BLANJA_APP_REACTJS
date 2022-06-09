import React, { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../component/module/navbar";
import styles from "./product.module.css";
import Button from "../../component/base/Button";
// import axios from "axios";

// images
import mainPhoto from "./image/bajubesar.png";
// import p1 from "./image/b1.png";
// import p2 from "./image/b2.png";
// import p3 from "./image/b3.png";
// import p4 from "./image/b4.png";
// import p5 from "./image/b5.png";
import star1 from "./image/Star.png";
import star2 from "./image/Star2.png";
import minus from "./image/minus.png";
import plus from "./image/plus.png";
import { getDataByid } from "../../config/redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import { addBag } from "../../config/redux/action/bagAction";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(id);
  // const [products, setProducts] = useState([]);
  const { detailProduct } = useSelector((state) => state.product);
  const photo = detailProduct.photo;
  // async function fetchData() {
  //   try {
  //     const result = await axios({
  //       method: "GET",
  //       baseURL: "http://localhost:4000/v1",
  //       url: `/products/${id}`,
  //     });
  //     // console.log(result.data.data[5].photo);
  //     setProducts(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const handleAddBag = (data) => {
    dispatch(addBag(data));
    navigate("/mybag");
  };

  useEffect(() => {
    // fetchData();
    dispatch(getDataByid(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home={true}></Navbar>
      <main>
        <section id="photo-product">
          <div className="container">
            <p>{`Home > Category > T-Shirt`}</p>
            <div className="row">
              <div className="col-12 col-lg-4 mt-5">
                <div className="row">
                  <div className="col">
                    <img src={photo ? photo : mainPhoto} className="w-100" alt="" />
                  </div>
                </div>
                <div className="row row-cols-5 mt-2">
                  <div className="col">
                    <img src={photo} className="img-fluid" alt="baju1" />
                  </div>
                  <div className="col">
                    <img src={photo} className="img-fluid" alt="baju1" />
                  </div>
                  <div className={"col"}>
                    <img src={photo} className="img-fluid" alt="baju1" />
                  </div>
                  <div className="col">
                    <img src={photo} className="img-fluid" alt="baju1" />
                  </div>
                  <div className="col">
                    <img src={photo} className="img-fluid" alt="baju1" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 mt-5">
                <p className="fw-bold fs-4">{detailProduct.name}</p>
                <p className="fw-light text-success">{detailProduct.brand}</p>
                <div className="rating d-flex">
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <p className="ms-1 mt-1">(10)</p>
                </div>
                <div className="price">
                  <p>Price</p>
                  <p className="fw-bold fs-3">{detailProduct.price}</p>
                </div>
                <div className="d-flex flex-column">
                  <p className="ms-1">Color</p>
                  <div className="d-flex">
                    <Button backgroundColor="#1a1a1a" width="36px" height="36px" borderRadius="50%"></Button>
                    <Button className="ms-2" backgroundColor="#db3022" width="36px" height="36px" borderRadius="50%"></Button>
                    <Button className="ms-2" backgroundColor="#4290d8" width="36px" height="36px" borderRadius="50%"></Button>
                    <Button className="ms-2" backgroundColor="#42d86c" width="36px" height="36px" borderRadius="50%"></Button>
                    {/* <div className={`${styles.color_circle} ${styles.black}`}>
                      <p>.</p>
                    </div>
                    <div className={`${styles.color_circle} ${styles.red}`}>
                      <p>.</p>
                    </div>
                    <div className={`${styles.color_circle} ${styles.blue}`}>
                      <p>.</p>
                    </div>
                    <div className={`${styles.color_circle} ${styles.green}`}>
                      <p>.</p>
                    </div> */}
                  </div>
                </div>
                <div className="mt-3 d-flex">
                  <div>
                    <p className="fw-bold">Size</p>
                    <div className="d-flex">
                      <div className={"d-flex justify-content-center align-items-center " + styles.color_circle + " " + styles.grey}>
                        <Button border="none" className="btn">
                          <img src={minus} alt="" />
                        </Button>
                      </div>
                      <p class="ms-2 me-2 mt-1">28</p>
                      <div class={"d-flex justify-content-center align-items-center " + styles.color_circle + " " + styles.white}>
                        <Button border="none" className="btn">
                          <img src={plus} alt="" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div class="jumlah ms-5">
                    <p class="fw-bold">Jumlah</p>
                    <div class="d-flex">
                      <div class={"d-flex justify-content-center align-items-center " + styles.color_circle + " " + styles.grey}>
                        <Button border="none" className="btn">
                          <img src={minus} alt="" />
                        </Button>
                      </div>
                      <p class="ms-2 me-2 mt-1">28</p>
                      <div class={"d-flex justify-content-center align-items-center " + styles.color_circle + " " + styles.white}>
                        <Button border="none" className="btn">
                          <img src={plus} alt="" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons d-flex">
                  <button type="button" class={"btn rounded-pill mt-5 " + styles.chatBtn}>
                    Chat
                  </button>
                  <button
                    onClick={() => {
                      handleAddBag(detailProduct);
                    }}
                    type="button"
                    class={"btn rounded-pill mt-5 ms-2 " + styles.chatBtn}
                  >
                    Add Bag
                  </button>
                  <button type="button" class={"rounded-pill mt-5 ms-2 " + styles.buyBtn}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="productInfo">
          <div class="container">
            <p class="mt-5 fw-bold fs-3">Informasi Produk</p>
            <div class="mt-5">
              <p class="fw-bold fs-4">Condition</p>
              <p class="">{detailProduct.condition}</p>
            </div>
            <div>
              <p class="fw-bold fs-4">Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                <br />
                <br />
                Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis <br />
                in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. <br />
                Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna. Donec non magna <br />
                <br />
                rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum <br />
                primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. <br />
                <br />
                In ultricies rutrum tempus. Mauris vel molestie orci.
              </p>
            </div>
          </div>
        </section>

        <section id="produkReview">
          <div class="container pr">
            <p class="mt-3 fw-bold fs-2">Product Review</p>
            <div class="d-flex align-items-center">
              <div class="rating mb-3">
                <div class="value d-flex align-items-center">
                  <p class={styles.title}>5.0</p>
                  <p class={styles.qty}>/10</p>
                </div>
                <div class={styles.barStar}>
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                </div>
              </div>
              <div class="stats d-flex ms-5">
                <div class="stars d-flex flex-column align-items-center">
                  <div class="mt-1">
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                  <div>
                    <img src={star2} alt="" />
                  </div>
                </div>
                <div class={"ms-3 " + styles.grad}>
                  <div class="mt-2 satu">
                    <p>5</p>
                  </div>
                  <div class="">
                    <p>4</p>
                  </div>
                  <div>
                    <p>3</p>
                  </div>
                  <div>
                    <p>2</p>
                  </div>
                  <div>
                    <p>1</p>
                  </div>
                </div>
                <div class="d-flex flex-column ">
                  <div class={"mt-3 ms-3 " + styles.line}></div>
                </div>
                <div class={"ms-3 " + styles.grad}>
                  <div class="mt-2 satu">
                    <p>5</p>
                  </div>
                  <div class="">
                    <p>0</p>
                  </div>
                  <div>
                    <p>0</p>
                  </div>
                  <div>
                    <p>0</p>
                  </div>
                  <div>
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside>
          <div class="container mt-5">
            <div class="similiarProduct">
              <p class="fw-bold fs-4">You can also like this</p>
              <p class="fw-ligth">You've never seen it before</p>
              <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5">
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card">
                    <img src="assets/image/fp.png" alt="..." />
                    <div class="card-body">
                      <p class="card-text" id="name">
                        Men's formal suit -<br />
                        Black And White
                      </p>
                      <p id="price">$ 40.0</p>
                      <p id="seller">Zalora Cloth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </Fragment>
  );
};

export default Product;
