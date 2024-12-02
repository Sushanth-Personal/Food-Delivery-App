export const handleAddToCart = async (product, userId) => {
  // const baseURL = "http://localhost:5000";
  const baseURL = "https://food-delivery-app-x2sv.onrender.com";
    const productId = product._id;
    const endpoint = `${baseURL}/cart/${userId}?productId=${productId}`;
  
    try {
      const response = await fetch(endpoint, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          productId: productId, 
          quantity: 1, 
        }),
      });
  
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
  