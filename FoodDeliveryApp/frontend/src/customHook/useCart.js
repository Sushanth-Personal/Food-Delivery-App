import { useState, useEffect } from "react";
import { useUserContext } from "../Contexts/UserContext";

const useCart = () => {
  // const baseURL = "http://localhost:5000";
  const baseURL= "https://food-delivery-app-x2sv.onrender.com"
  const { userId, setCartItems, setCartTotal } = useUserContext();
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    console.log("UseCart useEffect", userId);
    if (!userId) return;

    const fetchCartData = async () => {
      try {
        
        setLoading(true);
        setError(null);
        const response = await fetch(`${baseURL}/cart/${userId}`);
        if (!response.ok) {
          throw new Error(`Error fetching cart data: ${response.statusText}`);
        }
        const data = await response.json();
        let sumTotal = data.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
        sumTotal = parseFloat(sumTotal.toFixed(2));
        setCartTotal(sumTotal);
        setCartData(data.cartItems || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [userId]);

  // Sync cartData with setCartItems
  useEffect(() => {
    setCartItems(cartData);
  }, [cartData, setCartItems]);

  const addToCart = async (product) => {
    try {
      const response = await fetch(
        `${baseURL}/cart/${userId}?productId=${product._id}`,
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error adding product to cart");
      }

      const data = await response.json();
      let sumTotal = data.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
      sumTotal = parseFloat(sumTotal.toFixed(2));
      setCartTotal(sumTotal);
      setCartData(data.cartItems);

    } catch (err) {
      setError(err.message);
    }
  };

  const deleteFromCart = async (product) => {
    try {
      const response = await fetch(
        `${baseURL}/cart/${userId}?productId=${product.productId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting product from cart");
      }

      const data = await response.json();
      let sumTotal = data.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
      sumTotal = parseFloat(sumTotal.toFixed(2));
      setCartTotal(sumTotal);
      setCartData(data.cartItems);
    } catch (err) {
      setError(err.message);
    }
  };

  return { cartData, loading, error, addToCart, deleteFromCart };
};

export default useCart;