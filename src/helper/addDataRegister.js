import axios from "axios";
import Swal from "sweetalert2";

export const sellerRegister = async (dataform, navigate) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_BLANJA }/seller/register`, dataform);
    Swal.fire({
      // title: `Register Success`,
      text: `Register Success`,
      icon: `success`
    })
    navigate("/Login");
  } catch (error) {
    console.log(error);
    Swal.fire({
      // title: `Email Has`,
      text: `your email is already registered`,
      icon: `error`
    })
  }
};

export const userRegister = async (dataform, navigate) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_BLANJA }/users/register`, dataform);
    Swal.fire({
      // title: `Register Success`,
      text: `Register Success`,
      icon: `success`
    })
    navigate("/LoginCustomer");
  } catch (error) {
    console.log(error);
    Swal.fire({
      // title: `Email Has`,
      text: `your email is already registered`,
      icon: `error`
    })
  }
};

export const formatRp = (bilangan) => {
  var reverse = bilangan.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return ribuan
}