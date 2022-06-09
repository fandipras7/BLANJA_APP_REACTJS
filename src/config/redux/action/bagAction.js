export const addBag = (data) => {
  return {
    type: "ADD_BAG",
    payload: { data },
  };
};

export const addPlus = (dataId, dataCount) => {
  return {
    type: "PLUS",
    payload: { dataId, dataCount },
  };
};

export const minQty = (dataId, dataCount) => {
  return {
    type: "MINUS",
    payload: { dataId, dataCount },
  };
};

export const deleteProdct = (dataId) => {
  return {
    type: "REMOVE",
    payload: dataId,
  };
};

export const getProductBag = () => {
  return {
    type: "GET_PRODUCT_BAG",
  };
};
