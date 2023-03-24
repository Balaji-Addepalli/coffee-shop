import { Fragment } from "react";
import Banner from "./Banner/Banner";
import ProductList from "./Products/ProductList";
import { productsSelector } from "../../coffee-shop-redux/slices/cartSlice";
import { useSelector } from "react-redux";
const Home = ({ products }) => {
  const productListInCart = useSelector(productsSelector);
  return (
    <Fragment>
      <Banner />
      <ProductList products={products} />
      <button
        onClick={() => {
          console.log(productListInCart);
        }}
      >
        Get Cart State
      </button>
    </Fragment>
  );
};
export default Home;
