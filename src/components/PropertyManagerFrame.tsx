import { FunctionComponent, useEffect } from "react";
import styles from "./PropertyManagerFrame.module.css";

const PropertyManagerFrame: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.propertyManagerFrame}>
      <img
        className={styles.threeStepsFrame}
        alt=""
        src="/three-steps-frame@2x.png"
      />
      <img
        className={styles.propertyManagerFrameChild}
        loading="lazy"
        alt=""
        src="/group-2@2x.png"
        data-animate-on-scroll
      />
      <div className={styles.welcomeToRealstate}>Welcome to Realstate</div>
      <div className={styles.globalBrokerageFrame}>
        <h1 className={styles.manageYourProperty}>Manage Your Property</h1>
        <div className={styles.yourWillHave}>
          Your will have everything nearby supermarket, buses , station, the
          carmen neighborhood, etc
        </div>
        <div className={styles.wrapperGroup4}>
          <input
            className={styles.wrapperGroup4Child}
            placeholder="Enter Your Email Here"
            type="text"
          />
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.getAQuote}>Get a Quote</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagerFrame;
