export const addTocart = (data) => async (dispatch, getState) => {
    dispatch({
      type: "addToCart",
      payload: data,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };

  export const removeFromcart = (data) => async (dispatch, getState) => {
    dispatch({
      type: "removeFromCart",
      payload: data.id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };