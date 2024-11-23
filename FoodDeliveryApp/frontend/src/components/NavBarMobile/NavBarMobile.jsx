import styles from "./navbarmobile.module.css";
import useImage from "../../customHook/useImage";

const NavBarMobile = () => {
  const logoURL = useImage("id", "login-loginForm-logo-1");

  return (
    <div className={styles.navbar}>
      <div className = {styles.firstRow}>
        <div className={styles.logo}>
          <img
            src={logoURL.imageURL}
            className={styles.logoURL}
            alt=""
            id="login-loginForm-logo-1"
          />
        </div>
        <div className={styles.menu}>
          <button>
            <img src="./Menu.png" alt="menu" id="navbar-menu-menu-1" />
          </button>
        </div>
      </div>
      <div className = {styles.secondRow}>
        <div className={styles.loginSign}>
          <button>
            <img
              src="./Male User.png"
              alt="maleuser"
              id="navbar-loginSign-maleuser-1"
            />
            Login/Signup
          </button>
        </div>
        <div className={styles.cart}>
          <button>
            <img
              src="/cartIcon.png"
              alt="cart"
              id="headerdesktop-cart-cart-1"
            />
            <h3>My Cart</h3>
          </button>
        </div>
      </div>
      <div className = {styles.thirdRow}>
        <div className={styles.location}>
          <img
            src="/Location.png"
            alt="location"
            id="headerdesktop-location-location-1"
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
