import styles from "./searchpostcode.module.css";
import useScreenType from "../../customHook/useScreenType";
import useImage from "../../customHook/useImage";
import {displayImage} from "../../utility/imageProcess";
const SearchPostcode = () => {

    const screenType = useScreenType();

    const imageURLs = useImage("page", "searchpostcode");

  return (
    <div className={styles.searchPostcode}>
      <div className={styles.content}>
        <div className={styles.inputArea}>
          <h3>Order Restaurant food, takeaway and groceries.</h3>
          <h1 className={styles.line1}>Feast Your Senses,</h1>
          <h1 className={styles.line2}>Fast and Fresh</h1>
          <div className={styles.searchArea}>
            <label htmlFor="search">
              Enter a postcode to see what we deliver
            </label>
            <div className={styles.search}>
              <input type="text" placeholder="e.g. EC4R 3TE"/>
              {screenType === "desktop" &&( <button>Search</button>)}
              {screenType === "mobile" &&( <button className = {styles.mobileButton}>
                <img src="/Next page.png" alt="" />
              </button>)}
            </div>
          </div>
        </div>
        <img
          className={styles.girlEating}
          src={displayImage(imageURLs, "searchpostcode-inputarea-girleating-1")}
          alt="girleating"
          id="searchpostcode-inputarea-girleating-1"
        />
        <img
          className={styles.girlLaptop}
          src={displayImage(imageURLs, "searchpostcode-inputarea-girleating-2")}
          alt="girleating"
          id="searchpostcode-inputarea-girleating-2"
        />
        <div className={styles.rightContent}>
          <img
            className={styles.rightArc}
            src={displayImage(imageURLs, "searchpostcode-rightcontent-rightarc-1")}
            alt="rightarc"
            id="searchpostcode-rightcontent-rightarc-1"
          />
          <div className={styles.group1}>

            <img
              src={displayImage(imageURLs, "searchpostcode-rightcontent-group-1")}
              alt="group"
              id="searchpostcode-rightcontent-group-1"
            />
            <h1>We’ve Received your order!</h1>
            <h2>Awaiting Restaurant acceptance </h2>
            <img
              className={styles.tracking}
              src={displayImage(imageURLs, "searchpostcode-group1-tracking-1")}
              alt="tracking"
              id="searchpostcode-group1-tracking-1"
            />
          </div>
          <div className={styles.group2}>
            <h1>Order Accepted! </h1>
            <h2>Your order will be delivered shortly</h2>
            <img
              src={displayImage(imageURLs, "searchpostcode-rightcontent-group-2")}
              alt="group"
              id="searchpostcode-rightcontent-group-2"
            />
            <img
              className={styles.tick}
              src={displayImage(imageURLs, "searchpostcode-group2-tick-1")}
              alt="tick"
              id="searchpostcode-group2-tick-1"
            />
          </div>
          <div className={styles.group3}>
            <img
              src={displayImage(imageURLs, "searchpostcode-rightcontent-group-3")}
              alt="group"
              id="searchpostcode-rightcontent-group-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPostcode;
