import axios from "axios";
import Swal from "sweetalert2";
export const loginSeller = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_API_BLANJA}/seller/login`, dataForm);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    localStorage.setItem("roleId", user.role_id);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: { user } });
    Swal.fire({
      title: `Welcome ${user.name}`,
      text: `Login Success`,
      icon: `Success`
    })
    navigate("/");
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: `Error`,
      text: `Please enter the correct password and email`,
      icon: `error`
    })
  }
};

export const loginUser = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_API_BLANJA }/users/login`, dataForm);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    localStorage.setItem("roleId", user.role_id);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: { user } });   
    Swal.fire({
      title: `Welcome ${user.name}`,
      text: `Login Success`,
      icon: `success`
    })
    navigate("/");
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: `Error`,
      text: `Please enter the correct password and email`,
      icon: `error`
    })
  }
};

export const updateProfile = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const result = await axios.put(`${process.env.REACT_APP_API_BLANJA }/users/profile`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const profile = result.data.data
    console.log(profile);
    dispatch({ type: 'EDIT_PROFILE', payload: { profile }})
    Swal.fire({
      icon: "success",
      text: "Your profile has been updated"
    })
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      text: "Updating failed"
    })
  }
}
