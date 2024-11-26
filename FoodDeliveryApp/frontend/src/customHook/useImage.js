import { useState, useEffect } from "react";
import {
  getImageByPage,
  getImageByContainer,
  getImageByAltText,
  getImageById,
} from "../api/imageAPI";

const useImage = (type, value, security) => {
  const [imageURLs, setImageURLs] = useState([]); // State to store image URLs

  useEffect(() => {
    if (!type || !value) return;

    const fetchImages = async () => {
      try {
        let images = [];
        switch (type) {
          case "page":
            images = await getImageByPage(value, security);
            break;
          case "container":
            images = await getImageByContainer(value, security);
            break;
          case "altText":
            images = await getImageByAltText(value, security);
            break;
          case "id":
            images = await getImageById(value,security);
            break;
          default:
            images = [];
            break;
        }
        setImageURLs(images);
        // Ensure `images` is always an array
        if (!Array.isArray(images)) {
          if (images?.imageURL) {
            fetch(images.imageURL).catch((error) => {
              console.error(
                "Error prefetching image:",
                images.imageURL,
                error
              );
            });
          }
        } else {
          // Prefetch images to trigger service worker caching
          images.forEach((image) => {
            if (image?.imageURL) {
              fetch(image.imageURL).catch((error) => {
                console.error(
                  "Error prefetching image:",
                  image.imageURL,
                  error
                );
              });
            }
          });
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [type, value]);

  return imageURLs;
};

export default useImage;
