import axios from "axios";

export const sellerRegister = async (dataform, navigate) => {
  try {
    await axios.post("http://localhost:4000/v1/seller/register", dataform);
    alert("Selamat Pendaftaran berhasil");
    navigate("/Login");
  } catch (error) {
    console.log(error);
    alert("Email anda sudah terdaftar");
  }
};

export const userRegister = async (dataform, navigate) => {
  try {
    await axios.post("http://localhost:4000/v1/users/register", dataform);
    alert("Selamat Pendaftaran berhasil");
    navigate("/LoginCustomer");
  } catch (error) {
    console.log(error);
    alert("Email anda sudah terdaftar");
  }
};