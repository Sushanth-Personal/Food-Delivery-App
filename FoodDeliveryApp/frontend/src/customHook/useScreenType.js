import { useState, useEffect } from "react";

const useScreenType = () => {
  const [screenType, setScreenType] = useState(
    window.innerWidth < 950 ? "mobile" : "desktop"
  );



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenType("mobile");
      } else {
        setScreenType("desktop");
      }
      if(window.innerWidth < 950){
        setScreenType("tablet");
      }
    };

    // Add event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenType]);

  return screenType;
};

export default useScreenType;
