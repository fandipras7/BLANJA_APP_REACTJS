import { React, useEffect, useState } from "react";
// import Button from "../../component/base/Button";
import Navbar from "../../component/module/navbar";
import styles from "./home.module.css";
import Card from "../../component/base/card";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../config/redux/action/productAction";
import { getCategory } from "../../config/redux/action/categoryAction";
import { useNavigate, useSearchParams } from "react-router-dom";
import lohi from '../image/lohi.png'
// import axios from "axios";

const Home = () => {
  // const { search, isSearching } = useSelector((state) => state.search);
  const { category } = useSelector((state) => state.category);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const [isSearch, setIsSearch] = useState('')
  const [sortby, setSortby] = useState('')
  const [sort, setSort] = useState('')
  // const [keyword, setKeyword] = useState("");
  // const [product, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, pagination } = useSelector((state) => state.product);
  function moveToDetailProduct(id) {
    navigate(`/Product/${id}`);
  }

  const [page, setPage] = useState({
    currentPage: 1,
    limit: 3,
    keyword,
  });

  const buttonPagination = [];

  for (let i = 0; i < pagination.totalPage; i += 1) {
    buttonPagination.push(i);
  }
  // const angka = [1, 2, 3, 4, 5];
  // setProducts();

  const handleSearch = () => {
    setQuery({
      search: keyword
    })
    setSearchParams({ search: keyword });
    setIsSearch(1)
  };

  const [query, setQuery] = useState({})

  console.log(keyword);
  console.log(sortby);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getData(keyword, sortby, sort, page.currentPage, page.limit));
    // searchData();
    console.log("useEffect jalan");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchParams]);
  return (
    <div>
      {/* <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" home={true} onClickButton={handleSearch} onChange={(e) => setSearch(e.target.value)}></Navbar> */}
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" onClickButton={handleSearch} onChange={(e) => setKeyword(e.target.value)}></Navbar>
      <main>
        {/* <p>{searchParams}</p> */}
        <section className={styles.caraousell}>
          <div className="container">
            <div className="row" justify-content-center mt-4>
              <div className={"col-12 d-flex " + styles.caraousell}>
                <div>
                  <img className={"img-fluid " + styles.j1} src="./images/home/jumbotron/1.png" alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j2} src="./images/home/jumbotron/2.png" alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j3} src="./images/home/jumbotron/3ty.png" alt="" />
                </div>
                <div>
                  <img className={"img-fluid " + styles.j4} src="./images/home/jumbotron/4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="category">
          {isSearch ? <div className="container">
            <select
              onChange={(e) => {
                const newSort = e.target.value;
                setSortby(e.target.value);
                setQuery({
                  ...query,
                  sortby: newSort
                })
                setSearchParams({
                  ...query,
                  sortby: newSort
                });
              }}
              name="cars"
              id="cars"
            >
              <option value="">SortBy</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
              {/* <option value="location">Sortir Berdasarkan Lokasi</option>
            <option value="skill">Sortir Berdasarkan skill</option>
            <option value="freelance">Sortir Berdasarkan freelence</option> */}
            </select>
            <button onClick={() => {
              let newSort
              sort ? newSort = '' : newSort = 1
              setSort(newSort)
              setQuery({
                ...query,
                sort: newSort ? 'DESC' : 'ASC'
              })
              setSearchParams({
                ...query,
                sort: newSort ? 'DESC' : 'ASC'
              })
            }} style={{ border: 'none' }} className="ms-2"><img src={lohi} alt="" /></button>
          </div> : <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="text-dark">Category</h4>
                <p>What are you currently looking for</p>
              </div>
            </div>
            <div className="row position-relative justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-5">
              {category.map((item) => (
                <div className="col">
                  <div className="card align-items-center bg-danger" style={{ height: "180px" }}>
                    <div className="card-body d-flex flex-column">
                      {/* <img className="img-fluid" src="https://www.unukaltim.ac.id/wp-content/uploads/2019/12/697057-facebook-512.png" alt="" /> */}
                      <p className={styles.text_category}>{item.name}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <Button className={styles.btnCategory} width="52px" height="52px" borderRadius="50%" backgroundColor="white">
                <img src="./images/home/category/rigth.png" alt="" />
              </Button> */}
            </div>
          </div>

          }

        </section>
        <section id="new-product">
          <div className="container mt-5">
            <div className="row text-start mb-3">
              <div className="col">
                <p className="fw-bolder fs-4">Produk</p>
                <p>What are you looking for</p>
              </div>
            </div>
            <div className="row row row-cols-2 row-cols-md-3 row-cols-lg-5 row-cols-xg-6">
              {/* { isGeting ? <p>{product.name}</p> : <p>produk kosong</p>} */}
              {product.map((item) => (
                <div className="col mb-3">
                  <Card className="card" height="278px" key={item.id}>
                    <div className="text-center">
                      <img style={{ height: "136px" }} src={item.photo} class="img-fluid" alt="produk" />
                    </div>
                    <div className="card-body ">
                      <p id={styles["name"]} onClick={() => moveToDetailProduct(item.id)}>
                        {item.name}
                      </p>
                      <p id={styles["price"]}>{item.price}</p>
                      <p id={styles["seller"]}>{item.brand}</p>
                      <div class="rating">
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                        <img src="./images/home/Star/star.png" alt="" />
                      </div>
                    </div>
                  </Card>
                  {/* <div className="editDelete">
                    <Button onClick={() => navigate(`/Edit/${item.id}`)}>Edit</Button>
                    <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
                  </div> */}
                  {/* <Button onClick={() => navigate(`/profile/storeprofile/myproduct`)}>All Product</Button> */}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <nav className="mt-5">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page.currentPage <= 1 && "disabled"}`}>
            <button
              className="page-link"
              type="button"
              onClick={() => {
                // const newPage = {
                //   currentPage: page.currentPage - 1,
                //   limit: page.limit
                // }
                setPage((current) => ({ ...current, currentPage: current.currentPage - 1 }));
              }}
            >
              Previous
            </button>
          </li>
          {buttonPagination.map((item, index) => (
            <li className={`page-item ${index + 1 === page.currentPage && "active"}`} key={Math.random(100)}>
              <button onClick={() => index + 1} type="button" className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${page.currentPage === pagination.totalPage && "disabled"}`}>
            <button
              className="page-link"
              type="button"
              onClick={() => {
                // const newPage = {
                //   currentPage: page.currentPage + 1,
                //   limit: page.limit
                // }
                setPage((current) => ({ ...current, currentPage: current.currentPage + 1 }));
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
