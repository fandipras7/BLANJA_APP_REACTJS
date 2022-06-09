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
    const result = await axios.post("http://localhost:4000/v1/users/login", dataForm);
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
