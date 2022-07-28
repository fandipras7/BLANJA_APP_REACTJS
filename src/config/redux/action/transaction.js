import axios from "axios";

export const getMyTransaction = () => async (dispatch) =>{
    try {
      const token = localStorage.getItem('token')
      dispatch({type: "GET_TRANSACTION_PENDING"})
      const result = await axios.get(`${process.env.REACT_APP_API_BLANJA}/transaction`, 
      { "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const myTransaction = result.data.data
    dispatch({type: "GET_TRANSACTION_SUCCESS", payload: {myTransaction}})
    } catch (error) {
      console.log(error);
    }
  }