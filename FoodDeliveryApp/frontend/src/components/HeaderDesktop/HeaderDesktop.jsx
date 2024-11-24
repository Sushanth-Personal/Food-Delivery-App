import styles from "./headerdesktop.module.css";
import useImage from "../../customHook/useImage";
import { displayImage } from "../../utility/imageProcess";
const HeaderDesktop = () => {
  const imageURLs = useImage("page", "headerdesktop");
  return (
    <div className={styles.header}>
      <div className={styles.promo}>
        <p>🌟</p>
        Get 5% Off your first order,
        <a href=""> Promo: ORDER5</a>
      </div>

      <div className={styles.location}>
        <img
          src={displayImage(imageURLs, "headerdesktop-location-location-1")}
          alt="location"
          id="headerdesktop-location-location-1"
        />
        <h3>Regent Street, <span>A4</span>, A4201, London</h3>
        <a>Change Location</a>
      </div>
      <div className={styles.cart}>
        <button>
          <div className={styles.leftSide}>
            <img
              src={displayImage(imageURLs, "headerdesktop-cart-cart-1")}
              alt="cart"
              id="headerdesktop-cart-cart-1"
            />
            <h3>My Cart</h3>
          </div>
          
          <div className={styles.rightSide}>

            <div></div>
            <div className = {styles.forwardButton}>
              <img
              src={displayImage(imageURLs, "headerdesktop-cartForwardButton-forwardButton-1")}
              alt="forwardButton"
              id="headerdesktop-cartForwardButton-forwardButton-1"
            />
            </div>
            
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderDesktop;
