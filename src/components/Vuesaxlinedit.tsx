import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./Vuesaxlinedit.module.css";

const Vuesaxlinedit: FunctionComponent = () => {
  return (
    <section className={styles.vuesaxlinedit}>
      <div className={styles.starsGroup}>
        <div className={styles.bestProjectOf}>Best Project of the Years</div>
      </div>
      <div className={styles.ourRecentProjects}>
        <div className={styles.starRating}>
          <h1 className={styles.ourRecentProjects1}>Our recent projects</h1>
          <div className={styles.vuesaxlinearsearchnormal}>
            <img
              className={styles.vuesaxlinearsearchnormalChild}
              loading="lazy"
              alt=""
              src="/group-10.svg"
            />
            <div className={styles.wrapperGroup11}>
              <img
                className={styles.wrapperGroup11Child}
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-19@2x.png"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.sobhaHearlandIiVillasParent}>
                <div className={styles.sobhaHearlandIi}>
                  Sobha Hearland II Villas
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                  bibendum.
                </div>
                <div className={styles.starsParent}>
                  <div className={styles.stars}>
                    <img
                      className={styles.starinactivebigIcon}
                      loading="lazy"
                      alt=""
                      src="/starinactivebig.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon1}
                      loading="lazy"
                      alt=""
                      src="/starinactivebig-1.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon2}
                      loading="lazy"
                      alt=""
                      src="/starinactivebig-2.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon3}
                      loading="lazy"
                      alt=""
                      src="/starinactivebig-3.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon4}
                      loading="lazy"
                      alt=""
                      src="/starinactivebig-4.svg"
                    />
                  </div>
                  <div className={styles.headerFrame}>4.83</div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent rectangle20="/rectangle-20@2x.png" />
          <GroupComponent
            rectangle20="/rectangle-21@2x.png"
            propBackgroundImage="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default Vuesaxlinedit;
