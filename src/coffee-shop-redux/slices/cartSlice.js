import { createSlice } from "@reduxjs/toolkit";

const isProductExistInCart = (products, id) =>
  products.some((product) => product.id === id);
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (cartState, action) => {
      if (isProductExistInCart(cartState.products, action.payload.product.id)) {
        let cartProducts = cartState.products;
        cartProducts[
          cartProducts.findIndex(
            (product) => product.id === action.payload.product.id
          )
        ].amount += action.payload.productAmount;
        cartState.products = cartProducts;
      } else {
        cartState.products = cartState.products.concat({
          ...action.payload.product,
          amount: action.payload.productAmount,
        });
      }
    },
    incrementAmountFromCart: (cartState, action) => {
      cartState.products[
        cartState.products.findIndex(
          (product) => product.id === action.payload.product.id
        )
      ].amount += 1;
    },
    decrementAmountFromCart: (cartState, action) => {
      cartState.products[
        cartState.products.findIndex(
          (product) => product.id === action.payload.product.id
        )
      ].amount -= 1;
    },
    removeFromCart: (cartState, action) => {
      cartState.products = cartState.products.filter(
        (product) => product.id !== action.payload.product.id
      );
    },
  },
});
export const productsSelector = (state) => state.cart.products;
export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementAmountFromCart,
  decrementAmountFromCart,
} = cartSlice.actions;
