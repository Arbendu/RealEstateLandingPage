import { FunctionComponent, useEffect } from "react";
import styles from "./ContactFrame.module.css";

const ContactFrame: FunctionComponent = () => {
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
    <section className={styles.contactFrame}>
      <div className={styles.officesframe}>
        <h1 className={styles.weAreA}>
          We are a global, boutique real estate brokerage
        </h1>
        <div className={styles.subheadertext}>
          <div className={styles.transferrealestateframe}>
            <div className={styles.transferFrame} data-animate-on-scroll>
              <div className={styles.starsRating}>
                <div className={styles.feedbackFrame}>
                  <h1 className={styles.theTransferOf}>
                    The transfer of real estate
                  </h1>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                    sit pellentesque sollicitudin. Egestas faucibus lacus diam
                    in senectus consectetur. Mattis elit adipiscing quisque
                    tellus scelerisque vehicula ante nunc. Tellus consequat nisl
                    quis nisl justo.
                  </div>
                </div>
                <div className={styles.bookNowFrameParent}>
                  <button className={styles.bookNowFrame}>
                    <div className={styles.bookNow}>Book Now!</div>
                  </button>
                  <button className={styles.bookNowFrame1}>
                    <div className={styles.readMore}>Read More</div>
                  </button>
                </div>
              </div>
              <div className={styles.subheadingtext}>
                <div className={styles.officesFrame}>
                  <div className={styles.separatorRectangle}>12+</div>
                  <div className={styles.customers}>Customers</div>
                </div>
                <div className={styles.officesFrame1}>
                  <div className={styles.div}>14+</div>
                  <div className={styles.officesWrapper}>
                    <div className={styles.offices}>Offices</div>
                  </div>
                </div>
                <div className={styles.officesFrame2}>
                  <div className={styles.div1}>10+</div>
                  <div className={styles.students}>Students</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.newsletterSubscriptionGroupParent}>
            <img
              className={styles.newsletterSubscriptionGroup}
              loading="lazy"
              alt=""
              src="/rectangle-27@2x.png"
            />
            <div className={styles.subscribeButton} data-animate-on-scroll />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrame;
