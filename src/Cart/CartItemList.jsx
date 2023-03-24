import { Fragment } from "react";
import CartItem from "./CartItem";
const CartItemList = ({ products }) => {
  return (
    <div className={'cart-item-list'}>
      {products.map((product) => (
        <CartItem key={product.id} id={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartItemList;
