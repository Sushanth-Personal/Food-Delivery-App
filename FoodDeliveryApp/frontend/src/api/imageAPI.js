import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Ensure you're using the correct import here

const baseURL = "http://localhost:5000";

const api = axios.create({
  baseURL: `${baseURL}`,
});

api.interceptors.request.use((config) => {

if(config.url.includes("/protected")){
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    window.location.href = "/login";
    return Promise.reject("No access token found");
  }

  try {
    const decodedAccessToken = jwtDecode(accessToken);
    const accessTokenExpiryTime = decodedAccessToken.exp * 1000 - Date.now();

    if (accessTokenExpiryTime <= 0) {
      // Token expired
      console.warn("Access token expired. Redirecting to login...");
      window.location.href = "/login";
      return Promise.reject("Access token expired");
    }

    // Attach valid token to request
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  } catch (error) {
    console.error("Failed to decode token:", error);
    window.location.href = "/login";
    return Promise.reject(error);
  }

}else return config;
});

// Interceptor for handling wrong access token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 403 || error.response.status === 401)) {
      console.warn("Unauthorized or forbidden response. Redirecting to login...");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);



export const loginUser = async (email, password) => {
  // Check if identifier and password are provided
  if (!email || !password) {
    console.error("Identifier and password are required");
    return { message: "Identifier and password are required" };
  }
  try {
    const response = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });

    const { userData, accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);

    console.log("Login successful:", response.data);
    return { message: "Success", userData, accessToken};
  } catch (error) {
    console.error(
      "Error logging in:",
      error.response?.data || error.message
    );

    return { message: error.response?.data?.error || "Login failed" };
  }
};

export const registerUser = async (userName, contact, email, password) => {
  try {
    const response = await axios.post(`${baseURL}/auth/register`, {
      userName,
      contact,
      password,
      email,
    });
    return response.data.message; // Return the data directly
  } catch (error) {
    console.error("Error registering:", error.response.data.message);

    return error.response.data.message; // Handle error by returning null or an empty array
  }
};


const getImageById = async (imageId) => {
  try {
    const response = await api.get(`/image/?imageId=${imageId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

const getImageByContainer = async (container) => {
  try {
    const response = await api.get(`/image/?container=${container}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

const getImageByAltText = async (altText) => {
  try {
    const response = await api.get(`/image/?altText=${altText}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

const getImageByPage = async (page,security) => {
  try {
    if(security ==="protected"){
      const response = await api.get(`/protected/image/?page=${page}`);
      console.log(response.data);
    return response.data;
    }else{
      const response = await api.get(`/image/?page=${page}`);
      console.log(response.data);
      return response.data;
    }
   
    
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};
export {
  getImageById,
  getImageByContainer,
  getImageByAltText,
  getImageByPage,
};
