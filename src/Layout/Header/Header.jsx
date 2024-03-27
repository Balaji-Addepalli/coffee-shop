import classes from "./Header.module.css";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <img
              src="https://coffe-delivery-lemon.vercel.app/assets/coffe-delivery-logo.e98727a6.svg"
              alt="Location"
            />
          </Link>
        </div>
        <div className={classes["location-cart-button-container"]}>
          <div className={classes.location}>
            location
            <span>Fortaleza, CE</span>
          </div>
          <Link to={"/cart"}>
            <button className={classes["cart-button"]}>
              cart shopping
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
