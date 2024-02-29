import { FunctionComponent, useEffect } from "react";
import styles from "./LogoRectangle.module.css";

const LogoRectangle: FunctionComponent = () => {
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
    <section className={styles.logoRectangle}>
      <img
        className={styles.logoRectangleChild}
        alt=""
        src="/rectangle-17@2x.png"
      />
      <img
        className={styles.dRenderingIsometricFdgdf1Icon}
        loading="lazy"
        alt=""
        src="/3drenderingisometricfdgdf-1@2x.png"
        data-animate-on-scroll
      />
      <div className={styles.newsletterSubscription}>
        <h1 className={styles.subscribeOurNewsletter}>
          Subscribe Our Newsletter
        </h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
          pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
          consectetur. Mattis elit adipiscing quisque tellus scelerisque
          vehicula ante nunc.
        </div>
      </div>
      <div className={styles.wrapperGroup22}>
        <input
          className={styles.wrapperGroup22Child}
          placeholder="Enter Your Email"
          type="text"
        />
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.getAQuote}>Get a Quote</div>
        </button>
      </div>
    </section>
  );
};

export default LogoRectangle;
