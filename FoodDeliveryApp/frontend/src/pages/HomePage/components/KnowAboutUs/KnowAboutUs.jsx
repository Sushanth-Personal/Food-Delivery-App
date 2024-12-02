import styles from "./knowaboutus.module.css";
import useImage from "../../../../customHook/useImage";
import { displayImage } from "../../../../utility/imageProcess";
const KnowAboutUs = () => {

  const imageURLs = useImage("page", "knowaboutus");

  return (
    <div className={styles.knowAboutUs}>
      <header>
        <div className={styles.leftContent}>Know more about us!</div>
        <div className={styles.rightContent}>
          <ul>
            <li>Frequent Questions</li>
            <li>Who we are?</li>
            <li>Partner Program</li>
            <li>Help & Support</li>
          </ul>
        </div>
      </header>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.row1}>How does Order.UK work?</div>
          <ul>
            <li>What payment methods are accepted?</li>
            <li>Can I track my order in real-time?</li>
            <li>
              Are there any special discounts or promotions available?
            </li>
            <li>Is Order.UK available in my area?</li>
          </ul>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.row1}>
            <div className={styles.card}>
              <h1>Place an Order!</h1>
              <img
                id="knowaboutus-card-orderfood-1"
                src={displayImage(imageURLs, "knowaboutus-card-orderfood-1")}
                alt="orderfood"
              />
              <p>Place order through our website or Mobile app</p>
            </div>
            <div className={styles.card}>
              <h1>Track Progress</h1>
              <img
                id="knowaboutus-card-trackfood-1"
                src={displayImage(imageURLs, "knowaboutus-card-trackfood-1")}
                alt="trackfood"
              />
              <p>Your can track your order status with delivery time</p>
            </div>
            <div className={styles.card}>
              <h1>Get your Order!</h1>
              <img
                id="knowaboutus-card-getorder-1"
                src={displayImage(imageURLs, "knowaboutus-card-getorder-1")}
                alt="getorder"
              />
              <p>Receive your order at a lightning fast speed!</p>
            </div>
          </div>
          <span>
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </span>
        </div>
      </div>
    </div>
  );
};

export default KnowAboutUs;
