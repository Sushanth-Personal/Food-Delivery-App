import styles from "./searchpostcode.module.css";
import useScreenType from "../../customHook/useScreenType";
const SearchPostcode = () => {

    const screenType = useScreenType();

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
              <button>Search</button>
            </div>
          </div>
        </div>
        <img
          className={styles.girlEating}
          src="./girleating.png"
          alt="girleating"
          id="searchpostcode-inputarea-girleating-1"
        />
        <img
          className={styles.girlLaptop}
          src="./girllaptop.png"
          alt="girleating"
          id="searchpostcode-inputarea-girleating-2"
        />
        <div className={styles.rightContent}>
          <img
            className={styles.rightArch}
            src="./rightarch.png"
            alt="rightarch"
            id="searchpostcode-rightcontent-rightarch-1"
          />
          <div className={styles.group1}>

            <img
              src="./group1.png"
              alt="group"
              id="searchpostcode-rightcontent-group-1"
            />
            <h1>We’ve Received your order!</h1>
            <h2>Awaiting Restaurant acceptance </h2>
            <img
              className={styles.tracking}
              src="./Tracking.png"
              alt="tracking"
              id="searchpostcode-group1-tracking-1"
            />
          </div>
          <div className={styles.group2}>
            <h1>Order Accepted! </h1>
            <h2>Your order will be delivered shortly</h2>
            <img
              src="./group2.png"
              alt="group"
              id="searchpostcode-rightcontent-group-2"
            />
            <img
              className={styles.tick}
              src="./Tick Box.png"
              alt="tick"
              id="searchpostcode-group2-tick-1"
            />
          </div>
          <div className={styles.group3}>
            <img
              src="./group3.png"
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
