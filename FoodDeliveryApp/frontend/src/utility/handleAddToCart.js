import {addToCart} from "../api/api";

export const handleAddToCart = async (product, userId) => {

    let id=userId;
    if(!id) id=localStorage.getItem("userId");
  
    try {
      const response = await addToCart(id, product.product._id, product);
  
      if (response.ok) {
        const data = await response.json();
        // Assuming you want to update the cart after adding/updating the item
        console.log("Product added to cart:", data.cartItems);
        return data.cartItems;
        // Optionally, trigger another API call to get the full cart items
        // or update the state directly based on data.cartItem if needed
      } else {
        console.error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  