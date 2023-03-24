import classes from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import { Fragment } from "react";

const ProductList = ({ products }) => {
  return (
    <Fragment>
      <header className={classes.header}>Our Cafes</header>  
      <div className={classes["product-list"]}>
        {products.map((product) => (
          <ProductCard key={product.id} id={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};
export default ProductList;
