import styles from "./productDisplay.module.css";
import { useState, useEffect, useRef } from "react";
import useImage from "../../../../customHook/useImage";
import useRestaurant from "../../../../customHook/useRestaurant";
import { displayImage } from "../../../../utility/imageProcess";
import useDragToScroll from "../../../../customHook/useDragToScroll";
import { useUserContext } from "../../../../Contexts/UserContext";
import Cart from "../../../../components/Cart/Cart";
import useCart from "../../../../customHook/useCart";
import { handleAddToCart } from "../../../../utility/handleAddToCart";
import PropTypes from "prop-types";
import useScreenSize from "../../../../customHook/useScreenSize";

const ProductDisplay = ({ restaurantId, restaurantName }) => {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { isCartClicked, setIsCartClicked, userId } = useUserContext();
  const isSmallScreen = useScreenSize(1180);

  // Custom hooks
  const { addToCart, cartData } = useCart();
  const restURLs = useImage("page", restaurantName);
  const imageURLs = useImage("page", "productdisplay");
  let restId = restaurantId;
  useEffect(() => {
    if (!restId) {
      restId = cartData[0].restaurantId;
    }
  }, [cartData]);

  const { data } = useRestaurant(restId);

  const {
    listRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseLeave,
  } = useDragToScroll();

  // Refs
  const filterDisplaySectionRef = useRef(null);

  useEffect(() => {
    // Set filtered products based on category and search query
    if (data && data.menu) {
      let products = data.menu;

      if (selectedCategory) {
        products = products.filter(
          (item) => item.productCategory === selectedCategory
        );
      }

      if (searchQuery) {
        products = products.filter(
          (item) =>
            item.productName
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            item.productDescription
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        );
      }

      setFilteredProducts(products);
    }
  }, [data, selectedCategory, searchQuery]);

  const handleCategoryClick = (category) =>
    setSelectedCategory(category);
  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      setFilteredProducts(filteredProducts); // Trigger filter update
    }
  };

  const handleAddToCartClick = (product) => {
    setIsCartClicked(true);
    addToCart(product);
  };

  const closeCart = () => setIsCartClicked(false);

  // Scroll to filterDisplaySection when cart is clicked
  useEffect(() => {
    if (
      isCartClicked &&
      filterDisplaySectionRef.current &&
      !isSmallScreen
    ) {
      filterDisplaySectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isCartClicked, isSmallScreen]);

  return (
    <section className={styles.productDisplay}>
      <div className={styles.searchNavBar}>
        <h1>All Offers from McDonald’s East London</h1>
        <div className={styles.searchBox}>
          <img
            id="productdisplay-searchbox-searchicon-1"
            src={displayImage(
              imageURLs,
              "productdisplay-searchbox-searchicon-1"
            )}
            alt="searchicon"
          />
          <input
            type="text"
            placeholder="Search from menu..."
            value={searchQuery}
            onChange={handleSearch}
            onKeyDown={handleSearchEnter}
          />
        </div>
      </div>

      <div className={styles.categoryNavBar}>
        <ul
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <li
            className={
              selectedCategory === "" ? styles.selectedCategory : ""
            }
            onClick={() => handleCategoryClick("")}
          >
            All
          </li>
          {data && data.menu && data.menu.length > 0 ? (
            [
              ...new Set(
                data.menu.map((item) => item.productCategory)
              ),
            ].map((category, index) => (
              <li
                key={index}
                className={
                  selectedCategory === category
                    ? styles.selectedCategory
                    : ""
                }
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))
          ) : (
            <li>No categories available</li>
          )}
        </ul>
      </div>

      <div
        ref={filterDisplaySectionRef}
        className={styles.filterDisplaySection}
      >
        <div className={styles.productFilter}>
          <h1>{selectedCategory || "All Products"}</h1>
          <div className={styles.tilesContainer}>
            {filteredProducts.length > 0 ? (
              selectedCategory ? (
                filteredProducts.map((product) => (
                  <div
                    className={styles.productTile}
                    key={product._id}
                  >
                    <div className={styles.content}>
                      <div className={styles.leftContent}>
                        <h1>{product.productName}</h1>
                        <p>{product.productDescription}</p>
                        <h3>£{product.productPrice}</h3>
                      </div>
                      <div className={styles.rightContent}>
                        <img
                          className={styles.productImage}
                          src={displayImage(
                            restURLs,
                            product.productImageId
                          )}
                          alt={product.productName}
                        />
                        <img
                          id="productdisplay-producttile-plus-1"
                          role="button"
                          onClick={() =>
                            handleAddToCartClick(product)
                          }
                          className={styles.plus}
                          src={displayImage(
                            imageURLs,
                            "productdisplay-producttile-plus-1"
                          )}
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                [
                  ...new Set(
                    filteredProducts.map(
                      (product) => product.productCategory
                    )
                  ),
                ].map((category) => (
                  <div 
                  className = {styles.categoryTileContainer}
                  key={category}>
                    <h2>{category}</h2>
                    <div className = {styles.categoryTile}>
                      {filteredProducts
                        .filter(
                          (product) =>
                            product.productCategory === category
                        )
                        .map((product) => (
                          <div
                            className={styles.productTile}
                            key={product._id}
                          >
                            <div className={styles.content}>
                              <div className={styles.leftContent}>
                                <h1>{product.productName}</h1>
                                <p>{product.productDescription}</p>
                                <h3>£{product.productPrice}</h3>
                              </div>
                              <div className={styles.rightContent}>
                                <img
                                  className={styles.productImage}
                                  src={displayImage(
                                    restURLs,
                                    product.productImageId
                                  )}
                                  alt={product.productName}
                                />
                                <img
                                  id="productdisplay-producttile-plus-1"
                                  role="button"
                                  onClick={() =>
                                    handleAddToCartClick(product)
                                  }
                                  className={styles.plus}
                                  src={displayImage(
                                    imageURLs,
                                    "productdisplay-producttile-plus-1"
                                  )}
                                  alt="plus"
                                />
                                <img
                                  id="productdisplay-producttile-addbutton-1"
                                  role="button"
                                  onClick={() =>
                                    handleAddToCart(product,userId)
                                  }
                                  className={styles.addButton}
                                  src={displayImage(
                                    imageURLs,
                                    "productdisplay-producttile-addbutton-1"
                                  )}
                                  alt="addbutton"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))
              )
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>

        {/* Render cart conditionally */}
        {isCartClicked && (
          <>
            {isSmallScreen ? (
              <div className={styles.overlay} onClick={closeCart}>
                <Cart />
              </div>
            ) : (
              <div className={styles.cart}>
                <Cart />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// PropTypes validation
ProductDisplay.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  restaurantName: PropTypes.string.isRequired,
};

export default ProductDisplay;
