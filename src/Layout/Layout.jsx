import Header from "./Header/Header";
import classes from "./Layout.module.css";
import Home from "./Home/Home";
import Cart from "../Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout = ({ products }) => {
  return (
    <div className={classes["layout"]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Layout;
