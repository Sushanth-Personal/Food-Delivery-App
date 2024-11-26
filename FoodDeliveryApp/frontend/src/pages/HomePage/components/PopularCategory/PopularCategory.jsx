import styles from "./popularcategory.module.css";
import useImage from "../../../../customHook/useImage";
import {displayImage} from "../../../../utility/imageProcess";
const PopularCategory = () => {

    const imageURLs = useImage("page","popularcategory","protected");
    
  return (
    <section className={styles.popularCategory}>
      <div className = {styles.content}>
        <h1>Order.uk Popular Categories 🤩</h1>
        <div className={styles.container}>
          <div className={`${styles.tile} ${styles.firstTile}`}>
            <img
            id="popularcategory-tile-category-1"
            src={displayImage(imageURLs, "popularcategory-tile-category-1")} alt="category" />
            <div className={styles.name}>
              <h1>Burgers & Fast food</h1>
              <h2>21 Restaurants</h2>
            </div>
          </div>
          <div className={styles.tile}>
            <img
             id="popularcategory-tile-category-2"
            src={displayImage(imageURLs, "popularcategory-tile-category-2")} alt="category" />
            <div className={styles.name}>
              <h1>Salads</h1>
              <h2>32 Restaurants</h2>
            </div>
          </div>
          <div className={styles.tile}>
            <img
             id="popularcategory-tile-category-3"
            src={displayImage(imageURLs, "popularcategory-tile-category-3")} alt="category" />
            <div className={styles.name}>
              <h1>Pasta & Casuals</h1>
              <h2>4 Restaurants</h2>
            </div>
          </div>
          <div className={styles.tile}>
            <img
             id="popularcategory-tile-category-4"
            src={displayImage(imageURLs, "popularcategory-tile-category-4")} alt="category" />
            <div className={styles.name}>
              <h1>Pizza</h1>
              <h2>3 Restaurants</h2>
            </div>
          </div>
          <div className={styles.tile}>
            <img
             id="popularcategory-tile-category-5"
            src={displayImage(imageURLs, "popularcategory-tile-category-5")} alt="category" />
            <div className={styles.name}>
              <h1>Breakfast</h1>
              <h2>29 Restaurants</h2>
            </div>
          </div>
          <div className={`${styles.tile} ${styles.lastTile}`}>

            <img
             id="popularcategory-tile-category-6"
            src={displayImage(imageURLs, "popularcategory-tile-category-6")} alt="category" />
            <div className={styles.name}>
              <h1>Soups</h1>
              <h2>26 Restaurants</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
