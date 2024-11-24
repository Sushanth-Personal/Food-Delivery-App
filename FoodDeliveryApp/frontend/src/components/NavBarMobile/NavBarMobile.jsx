import styles from "./navbarmobile.module.css";
import useImage from "../../customHook/useImage";
import {displayImage} from "../../utility/imageProcess";

const NavBarMobile = () => {
  const imageURLs= useImage("page", "navbar");

  return (
    <div className={styles.navbar}>
      <div className = {styles.firstRow}>
        <div className={styles.logo}>
          <img
            src={displayImage(imageURLs, "navbar-logo-logo-1")}
            className={styles.logoURL}
            alt="logo"
            id="navbar-logo-logo-1"
          />
        </div>
        <div className={styles.menu}>
          <button>
            <img src={displayImage(imageURLs, "navbar-menu-menu-1")} alt="menu" id="navbar-menu-menu-1" />
          </button>
        </div>
      </div>
      <div className = {styles.secondRow}>
        <div className={styles.loginSign}>
          <button>
            <img
              src={displayImage(imageURLs, "navbar-loginSign-maleuser-1")}
              alt="maleuser"
              id="navbar-loginSign-maleuser-1"
            />
            Login/Signup
          </button>
        </div>
        <div className={styles.cart}>
          <button>
            <img
              src={displayImage(imageURLs, "navbar-cart-cart-1")}
              alt="cart"
              id="navbar-cart-cart-1"
            />
            <h3>My Cart</h3>
          </button>
        </div>
      </div>
      <div className = {styles.thirdRow}>
        <div className={styles.location}>
          <img
            src={displayImage(imageURLs, "navbar-location-location-1")}
            alt="location"
            id="navbar-location-location-1"
          />
          <h3>
          Lution Street, N4G-00....
          </h3>
        </div>
      </div>
      
    </div>
  );
};

export default NavBarMobile;
