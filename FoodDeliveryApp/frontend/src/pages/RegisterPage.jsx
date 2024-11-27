import styles from "./styles/registerpage.module.css";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { useState } from "react";
import useImage from "../customHook/useImage";
import { displayImage } from "../utility/imageProcess";
import { useNavigate } from "react-router-dom";
import {
  validatePhoneNumber,
  validateEmail,
  validatePassword,
} from "../errorHandler/inputError"; // Import validation functions
import { registerUser } from "../api/imageAPI";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle phone number validation
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const { value: cleanedPhone, error } = validatePhoneNumber(value);

    setUserData({
      ...userData,
      phoneNumber: cleanedPhone,
    });

    setErrors({
      ...errors,
      phoneNumber: error,
    });
  };

  // Handle password change
  const handlePasswordBlur = (e) => {
    const { value } = e.target;
    const { value: updatedPassword, error } = validatePassword(value);

    setUserData({
      ...userData,
      password: updatedPassword,
    });

    setErrors({
      ...errors,
      password: error,
    });
  };
  // Handle email validation on blur (focus out)
  const handleEmailBlur = () => {
    const { value, error } = validateEmail(userData.email);

    setUserData({
      ...userData,
      email: value,
    });

    setErrors({
      ...errors,
      email: error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(
        userData.userName,
        userData.phoneNumber,
        userData.email,
        userData.password
      );

      if (response === "Success") {
        navigate("/login");
      } else {
        console.error("Registration failed:", response);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Use the custom hook to fetch image URLs
  const imageURLs = useImage("page", "login");

  return (
    <section className={styles.register}>
      <div className={styles.upperSection}>
        <div className={styles.registerContent}>
          <div className={styles.registerSection}>
            <div className={styles.registerForm}>
              <img
                id="register-registerForm-logo-1"
                src={displayImage(
                  imageURLs,
                  "login-loginForm-logo-1"
                )}
                alt="logo"
              />
              <h1>Welcome Back 👋</h1>
              <h2>
                Today is a new day. It's your day. You shape it. Sign
                in to start ordering.
              </h2>
              <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                  <label htmlFor="userName">Name</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="eg. John A"
                    value={userData.userName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phoneNumber">Phone</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter 10 digit phone number"
                    value={userData.phoneNumber}
                    onChange={handlePhoneChange}
                  />
                  {errors.phoneNumber && (
                    <div className={styles.error}>
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Example@email.com"
                    value={userData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                  />
                  {errors.email && (
                    <div className={styles.error}>{errors.email}</div>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    value={userData.password}
                    id="password"
                    name="password"
                    placeholder="At least 8 characters"
                    onChange={handleChange}
                    onBlur={handlePasswordBlur}
                  />
                  {errors.password && (
                    <div className={styles.error}>
                      {errors.password}
                    </div>
                  )}
                </div>
                <h4>Forgot Password?</h4>
                <button onClick={handleSubmit}>Continue</button>
                <h3>
                  Already have an account?
                  <a href="#" onClick={() => navigate("/login")}>
                    Sign in
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.registerImage}>
            <img
              src={displayImage(
                imageURLs,
                "login-loginImage-loginImage-1"
              )}
              alt="registerImage"
              id="login-loginImage-loginImage-1"
            />
          </div>
        </div>
      </div>
      <footer>
        <FooterComponent />
      </footer>
    </section>
  );
};

export default RegisterPage;
