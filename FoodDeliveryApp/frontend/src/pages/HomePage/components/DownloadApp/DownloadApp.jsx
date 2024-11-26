import styles from "./downloadapp.module.css";
import {useEffect} from "react";
import useScreenSize from "../../../../customHook/useScreenSize";
import useImage from "../../../../customHook/useImage";
import { displayImage } from "../../../../utility/ImageProcess";
const DownloadApp = () => {
  const isMobile = useScreenSize(1350);
  const imageURLs = useImage("page", "downloadapp");
  useEffect(
    ()=>{
      console.log("downloadApp",imageURLs)
    },
  [imageURLs]);
  return (
    <section className={styles.DownloadApp}>
      {!isMobile && (
        <div className={styles.mainContainer}>
          <div className={styles.topLayer}>
            <div className={styles.leftContent}>
              <img
                className={styles.mobilefriends}
                id="downloadapp-content-mobilefriends-1"
                src={displayImage(
                  imageURLs,
                  "downloadapp-content-friends-1"
                )}
                alt="friends"
              />
            </div>
            <div className={styles.rightContent}></div>
          </div>

          <div className={styles.bottomLayer}>
            <div className={styles.leftContent}></div>
            <div className={styles.rightContent}>
              <div className={styles.line1}>
                <img
                  id="downloadapp-rightcontent-logo-1"
                  src={displayImage(imageURLs, "downloadapp-rightcontent-logo-1")}
                  alt="logo"
                />
                <h1 className={styles.ing}>ing is more</h1>
              </div>
              <div className={styles.blackBar}>
                <h1>Personalised </h1>
                <h2>& Instant</h2>
              </div>
              <div className={styles.line3}>
                <p>Download the Order.uk app for faster ordering</p>
              </div>
              <img
                className={styles.appstore}
                id="downloadapp-bottomlayer-appstore-1"
                src={displayImage(imageURLs, "downloadapp-bottomlayer-appstore-1")}
                alt="appstore"
              />
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileContent}>
            <div className={styles.upperContent}>
              <div className={styles.line1}>
                <img src={displayImage(imageURLs, "downloadapp-rightcontent-logo-1")}alt="logo" />
                <h1 className={styles.ing}>ing is more</h1>
              </div>
              <div className={styles.line2}>
                <h1>Personalised</h1>
                <h2>& Instant</h2>
              </div>
              <div className={styles.line3}>
                <p>Download the Order.uk app for faster ordering</p>
              </div>
              <div className={styles.line4}>
                <img src={displayImage(imageURLs, "downloadapp-bottomlayer-appstore-1")} alt="appstore" />
              </div>
            </div>

            <img
              className={styles.friends}
              src={displayImage(
                imageURLs,
                "downloadapp-mobilefriends-mobilefriends-1"
              )}
              alt="friends"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DownloadApp;
