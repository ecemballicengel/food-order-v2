export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      _id: menu._id,
      ad: menu.ad,
      img: menu.img,
      ozellik: ozellik,
      desc: menu.desc,
      miktar: miktar,
      fiyat: menu.fiyat,
      fiyatlar: menu.fiyat[0][ozellik] * miktar,
    };
    if (miktar > 0 && miktar < 11) {
      dispatch({
        type: "ADD_TO_CART",
        payload: cartItem,
      });

      const cartItems = getState().cartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      alert("Doğru düzgün miktar seç");
    }
  };

export const deleteFromCartAction = (menu) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_FROM_CART",
    payload: menu,
  });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
