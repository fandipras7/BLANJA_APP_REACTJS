import axios from "axios"

// export const addBag = (data) => {
//   return {
//     type: "ADD_BAG",
//     payload: { data },
//   };
// };

// export const addPlus = (dataId, dataCount) => {
//   return {
//     type: "PLUS",
//     payload: { dataId, dataCount },
//   };
// };

// export const minQty = (dataId, dataCount) => {
//   return {
//     type: "MINUS",
//     payload: { dataId, dataCount },
//   };
// };

// export const deleteProdct = (dataId) => {
//   return {
//     type: "REMOVE",
//     payload: dataId,
//   };
// };

// export const getProductBag = () => {
//   return {
//     type: "GET_PRODUCT_BAG",
//   };
// };

export const getMyCart =  () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    dispatch({type: "GET_MYCART_PENDING"})
    const myCart = await axios.get(`${process.env.REACT_APP_API_BLANJA}/cart`, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const cart = myCart.data.data
    dispatch({type: "GET_MYCART_SUCCESS", payload: {cart}})
  } catch (error) {
    console.log(error);
  }
}

export const addMycart = async (data, navigate) => {
  try {
    const token = localStorage.getItem('token')
    // dispatch({type: "GET_MYCART_PENDING"})
    await axios.post(`${process.env.REACT_APP_API_BLANJA}/cart`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    navigate('/mybag')
    // dispatch({type: "GET_MYCART", payload: {cart}})
  } catch (error) {
    console.log(error);
  }
}
