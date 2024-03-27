import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  incrementAmountFromCart,
  decrementAmountFromCart,
  removeFromCart,
} from "../coffee-shop-redux/slices/cartSlice";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const incrementHandler = (product) => {
    dispatch(
      incrementAmountFromCart({ product, productAmount: product.amount })
    );
  };
  const decrementHandler = (product) => {
    if (product.amount > 1) {
      dispatch(
        decrementAmountFromCart({ product, prodctAmount: product.Amount })
      );
    } else {
      dispatch(removeFromCart({ product }));
    }
  };
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["contents-container"]}>
        <div className={classes["product-image-container"]}>
          <img src={product.imageURL} alt="" />
        </div>
        <div
          className={classes["product-details-adder-remover-buttons-container"]}
        >
          <div className={classes["product-details-container"]}>
            <div className={classes["product-name"]}>{product.name}</div>
          </div>
          <div className={classes["buttons-container"]}>
            <div className={classes["increment-decrement-buttons-container"]}>
              <div
                onClick={() => {
                  decrementHandler(product);
                }}
                className={classes["decrement-button"]}
              >
                -
              </div>
              <div>{product.amount}</div>
              <div
                onClick={() => {
                  incrementHandler(product);
                }}
                className={classes["increment-button"]}
              >
            +
              </div>
            </div>
            <div className={classes["remover-button-container"]}>
              <div onClick={()=>{dispatch(removeFromCart({product}))}}className={classes["remover-button"]}>
                trash
                <div className={classes["remover-text"]}>REMOVER</div>
              </div>
            </div>
          </div>
        </div>
        <div className={"product-price-container"}>
          <span>R${(product.amount * product.price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
