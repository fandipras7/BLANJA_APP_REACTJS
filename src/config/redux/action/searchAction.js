export const searchProduct = (keyword, searchParams) => {
  return {
    type: "SEARCHING_PRODUCT",
    payload: { keyword: keyword, searchParams },
  };
};
