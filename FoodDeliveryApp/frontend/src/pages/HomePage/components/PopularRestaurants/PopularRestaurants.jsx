import styles from "./popularrestaurants.module.css";
const PopularRestaurants = () => {
  return (
    <section className={styles.popularRestaurants}>
      <div className={styles.heading}>Popular Restaurants</div>
      <div className={styles.content}>
        <ul>
          <li>
            <img
              id="popularrestaurants-content-tile-1"
              src="./tile1.png"
              alt="tile"
            />
            <div className={styles.lowerTileContent}>
              <div className={styles.text}>McDonald’s London</div>
            </div>
          </li>
          <li>
            <img
              id="popularrestaurants-content-tile-2"
              src="./tile2.png"
              alt="tile"
            />
            <div className={styles.lowerTileContent}>
              <div className={styles.text}>KFC West London</div>
            </div>
          </li>
          <li>
            <img
              id="popularrestaurants-content-tile-3"
              src="./tile3.png"
              alt="tile"
            />
            <div className={styles.lowerTileContent}>
              <div className={styles.text}>Texas Chicken</div>
            </div>
          </li>
          <li>
            <img
              id="popularrestaurants-content-tile-4"
              src="./tile4.png"
              alt="tile"
            />
            <div className={styles.lowerTileContent}>
              <div className={styles.text}>Burger King</div>
            </div>
          </li>
          <li>
            <img
              id="popularrestaurants-content-tile-5"
              src="./tile5.png"
              alt="tile"
            />
            <div className={styles.lowerTileContent}><div className = {styles.text}>Shaurma 1</div></div>
          </li>
          <li>
            <img
              id="popularrestaurants-content-tile-6"
              src="./tile6.png"
              alt="tile"
            />
            <div className={styles.lowerTileContent}><div className = {styles.text}>Papa Johns</div></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PopularRestaurants;
