import styles from "./exclusivedeals.module.css";
import useScreenType from "../../customHook/useScreenType";
import useImage from "../../customHook/useImage";
import {displayImage} from "../../utility/imageProcess";

const ExclusiveDeals = () => {

  const imageURLs = useImage("page", "exclusivedeals");

  const screenType = useScreenType();
  return (
    <section className={styles.exclusiveDeals}>
      <nav>
        {screenType === "desktop" &&(<div className={styles.title}>
          Up to -40% 🎊 Order.uk exclusive deals
        </div>)}
        {screenType === "mobile" &&(<div className={styles.title}>
          Up to -40% Discount Offers 🎊 
        </div>)}
        
        <div className={styles.rightTray}>
          <button className={styles.small}>Vegan</button>
          <button className={styles.small}>Sushi</button>
          <button className={styles.large}>Pizza & Fast Food</button>
          <button className={styles.small}>Others</button>
        </div>
      </nav>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsViewPort}>
          <ul>
            <li>
              <div className={styles.gradientbox}>
                <img id="exclusivedeals-cardsviewport-tile-1" src={displayImage(imageURLs, "exclusivedeals-cardsviewport-tile-1")} alt="tile" />
                <div className={styles.discountBox}>
                  -40%
                </div>
              </div>
            </li>
            <li>
              <div className={styles.gradientbox}>
                <img id="exclusivedeals-cardsviewport-tile-2" src={displayImage(imageURLs, "exclusivedeals-cardsviewport-tile-2")} alt="tile" />
                <div className={styles.discountBox}>
                  -40%
                </div>
              </div>
            </li>
            <li>
              <div className={styles.gradientbox}>
                <img id="exclusivedeals-cardsviewport-tile-3"  src={displayImage(imageURLs, "exclusivedeals-cardsviewport-tile-3")} alt="tile" />
                <div className={styles.discountBox}>
                  -40%
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;