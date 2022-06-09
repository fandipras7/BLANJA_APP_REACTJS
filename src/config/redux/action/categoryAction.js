import axios from "axios";

export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_CATEGORY_PENDING" });
    const result = await axios.get("http://localhost:4000/v1/category");
    const category = result.data.data;
    dispatch({ type: "GET_CATEGORY_SUCCESS", payload: { category } });
    // data(category)
  } catch (error) {
    console.log(error);
  }
};
