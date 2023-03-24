import CartItemList from "./CartItemList";
import { productsSelector } from "../coffee-shop-redux/slices/cartSlice";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
const Cart = () => {
  const products = useSelector(productsSelector);
  const getTotalAmont = () => {
    console.log(products.map((product) => product.amount));
    return products
      .map((product) => product.amount * product.price)
      .reduce((totalAmount, itemAmount) => totalAmount + itemAmount, 0);
  };
  return (
    <div className={classes.cart}>
      <header className={classes.header}>Cart</header>
      <div className={classes["selected-items-container"]}>
        <CartItemList products={products} />
        <div className={classes["total-price-container"]}>
          <div>Total Price</div>
          <div>
            R$ {getTotalAmont() ? getTotalAmont().toFixed(2) : (0).toFixed(2)}
          </div>
        </div>
        <div className={classes['confirm-order-container']}>
          <button disabled={products.length>0?false:true}>CONFIRM ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
