import styles from "./advertisement.module.css";
import useImage from "../../../../customHook/useImage";
import { displayImage } from "../../../../utility/imageProcess";
const Advertisement = () => {

  const imageURLs = useImage("page", "advertisement");

  return (
    <section className={styles.advertisement}>
      <div className={styles.leftContent}>
        <img
          id="advertisement-leftcontent-leftbackground-1"
          src={displayImage(imageURLs, "advertisement-leftcontent-leftbackground-1")}
          alt="leftbackground"
        />
        <img
        className = {styles.gradient}
          id="advertisement-leftcontent-gradient-1"
          src={displayImage(imageURLs, "advertisement-content-gradient-1")}
          alt="gradient"
        />
        <div className={styles.caption}>Earn more with lower fees</div>
        <div className={styles.content}>
          <h3>Signup as a business</h3>
          <h1>Partner with us</h1>
          <div className={styles.getStarted}>Get Started</div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <img
          id="advertisement-rightcontent-rightbackground-1"
          src={displayImage(imageURLs, "advertisement-rightcontent-rightbackground-1")}
          alt="rightbackground"
        />
        <img
        className = {styles.gradient}
          id="advertisement-rightcontent-gradient-1"
          src={displayImage(imageURLs, "advertisement-content-gradient-1")}
          alt="gradient"
        />
        <div className={styles.caption}>Avail exclusive perks</div>
        <div className={styles.content}>
          <h3>Signup as a rider</h3>
          <h1>Ride with us</h1>
          <div className={styles.getStarted}>Get Started</div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
