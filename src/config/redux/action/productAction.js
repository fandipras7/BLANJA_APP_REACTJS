import axios from "axios";

export const getData = (searchParams) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DATA_PENDING" });
    // const result = await axios.get('http://localhost:4000/v1/products')
    const result = await axios({
      method: "GET",
      baseURL: process.env.REACT_APP_API_BLANJA,
      url: `/products?${searchParams}`,
    });
    const product = result.data.data;
    console.log(product);
    dispatch({ type: "GET_DATA_SUCCESS", payload: { product } });
  } catch (error) {
    console.log(error);
    alert("Gagal mengambil produk");
  }
};

export const getDataByid = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DETAIL_PENDING" });
    const result = await axios({
      method: "GET",
      baseURL: "http://localhost:4000/v1",
      url: `/products/${id}`,
    });
    // console.log(result.data.data[5].photo);
    const product = result.data.data;
    dispatch({ type: "GET_DETAIL_SUCCESS", payload: { product } });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (dataform, navigate) => async (dispatch) => {
  try {
    const result = await axios.post("http://localhost:4000/v1/products", dataform, { "content-type": "multipart/form-data" });
    // await axios(
    //   {
    //     method: "POST",
    //     baseURL: process.env.REACT_APP_API_BLANJA,
    //     url: "/products",
    //   },
    //   dataform
    // );
    const product = result.data.data;
    alert("berhasil menambah produk");
    dispatch({ type: "ADD_PRODUCT", payload: { product } });
    navigate("/storeprofile/myproduct");
  } catch (error) {
    console.log(error);
    alert("Gagal menambah produk");
  }
};

export const editProduct = (dataform, navigate, id) => async (dispatch) => {
  try {
    const result = await axios.put(`http://localhost:4000/v1/products/${id}`, dataform);
    const product = result.data.data;
    dispatch({ type: "EDIT_PRODUCT", payload: { product } });
    navigate("/storeprofile/myproduct");
  } catch (error) {
    console.log(error);
    alert("gagal menambah produk");
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4000/v1/products/${id}`);
    dispatch({ type: "DELETE_PRODUCT", payload: { id } });
  } catch (error) {
    console.log(error);
    alert("Gagal menghapus produk");
  }
};

// export const searchDataProduct = async (searchParams, data) => {
//   try {
//     const result = await axios({
//       method: "GET",
//       baseURL: process.env.REACT_APP_API_BLANJA /*"http://localhost:4000/v1" */,
//       url: `products?${searchParams}`,
//     });
//     // console.log(result.data.data[5].photo);
//     // const products = result.data.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
