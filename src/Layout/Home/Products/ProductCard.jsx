import classes from "./ProductCard.module.css";
import { addToCart } from "../../../coffee-shop-redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Category = ({ category }) => {
  return <div className={classes["category"]}>{category}</div>;
};
const ProductCard = ({ product }) => {
  const cartDispatch = useDispatch();
  const [productAmount, setProductAmount] = useState(1);
  const incrementAmount = () => {
    setProductAmount((currentAmount) => (currentAmount += 1));
  };
  const decrementAmount = () => {
    setProductAmount((currentAmount) => {
      if (currentAmount === 1) {
        return currentAmount;
      } else {
        return currentAmount - 1;
      }
    });
  };
  return (
    <div className={classes["product"]}>
      <div className={classes["details"]}>
        <div className={classes["product-image"]}>
          <img src={product.imageURL} alt="traditional espresso" />
        </div>
        <div className={classes["categories"]}>
          {product.categories.map((category, index) => (
            <Category key={index} id={index} category={category} />
          ))}
        </div>
        <h3 className={classes["product-name"]}>{product.name}</h3>
        <p className={classes["product-description"]}>{product.description}</p>
        <div className={classes["product-price-cart-container"]}>
          <div className={classes["product-price-container"]}>
            <span>R$</span>
            <span className={classes["product-price"]}>
              {product.price.toFixed(2)}
            </span>
          </div>
          <div className={classes["product-cart-container"]}>
            <div className={classes["cart-add-remove-buttons"]}>
              <button
                className={classes["decrement-amount-button"]}
                onClick={decrementAmount}
              >
                -
              </button>
              <div>{productAmount}</div>
              <button
                className={classes["increment-amount-button"]}
                onClick={incrementAmount}
              >
                +
              </button>
            </div>
            <div className={classes["cart-button-container"]}>
              <button
                className={classes["cart-button"]}
                onClick={() => {
                  cartDispatch(addToCart({ product, productAmount }));
                  setProductAmount(1);
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
