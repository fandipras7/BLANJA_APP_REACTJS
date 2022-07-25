import axios from "axios";
export const loginSeller = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post("http://localhost:4000/v1/seller/login", dataForm);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    localStorage.setItem("roleId", user.role_id);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: { user } });
    alert("Anda berhasil Login");
    navigate("/home");
  } catch (error) {
    console.log(error);
    alert("Password dan email salah");
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
    alert("Anda berhasil Login");
    navigate("/home");
  } catch (error) {
    console.log(error);
    alert("Password dan email salah");
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
    alert('EDIT PROFILE SUCCESS')
  } catch (error) {
    console.log(error);
    alert('EDIT PROFILE FAILED')
  }
}
