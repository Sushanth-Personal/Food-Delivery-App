import { useState, useEffect } from "react";

const useScreenType = () => {
  const [screenType, setScreenType] = useState(
    window.innerWidth < 950 ? "mobile" : "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 950) {
        setScreenType("mobile");
      } else {
        setScreenType("desktop");
      }
    };

    // Add event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useScreenType;
