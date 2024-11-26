import styles from "./downloadapp.module.css";
import useScreenSize from "../../../../customHook/useScreenSize";

const DownloadApp = () => {
  const isNotDesktop = useScreenSize(1350);

  return (
    <section className={styles.DownloadApp}>
      {!isNotDesktop && (
        <div className={styles.mainContainer}>
          <div className={styles.topLayer}>
            <div className={styles.leftContent}>
              <img
                className={styles.friends}
                id="downloadapp-content-friends-1"
                src="./friends.png"
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
                  src="./logo.png"
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
              className = {styles.appstore}
                id="downloadapp-bottomlayer-appstore-1"
                src="./appstore.png"
                alt="appstore"
              />
            </div>
          </div>
        </div>
      )}

      {isNotDesktop && (
    <div className={styles.mobileContainer}>
    <div className={styles.mobileContent}>
      <div className = {styles.upperContent}>
        <div className={styles.line1}>
          <img src="./logo.png" alt="logo" />
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
          <img src="./appstore.png" alt="appstore" />
        </div>
      </div>
  
      
        <img className = {styles.friends} src="./friendsmobile.png" alt="friends" />
      
    </div>
  </div>
  
    
      )}
    </section>
  );
};

export default DownloadApp;
