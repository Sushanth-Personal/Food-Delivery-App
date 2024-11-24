import styles from "./navbar.module.css";
import useImage from "../../customHook/useImage";
import { displayImage } from "../../utility/imageProcess"

const NavBar = () => {
  const imageURLs = useImage("page", "navbar");

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src={displayImage(imageURLs, "navbar-logo-logo-1")}
          className={styles.logoURL}
          alt="logo"
          id="navbar-logo-logo-1"
        />
      </div>
      <div className={styles.navTray}>
        <div>
            <button className = {styles.homeButton}>Home</button>
        </div>
        <div>
            <button>Browse Menu</button>
        </div>
        <div>
            <button>Special Offers</button>
        </div>
        <div>
            <button>Restaurants</button>
        </div>
        <div>
            <button>Track Order</button>
        </div>
        <div className={styles.loginSign}>
        <button>
            <img src={displayImage(imageURLs, "navbar-loginSign-maleuser-1")} alt="maleuser" id="navbar-loginSign-maleuser-1" />
            Login/Signup</button>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
