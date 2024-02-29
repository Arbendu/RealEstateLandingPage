import { FunctionComponent } from "react";
import styles from "./ProjectsFrame.module.css";

const ProjectsFrame: FunctionComponent = () => {
  return (
    <header className={styles.projectsFrame}>
      <div className={styles.projectsFrameChild} />
      <div className={styles.agentsFrame}>
        <div className={styles.logo}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <div className={styles.frameAboutUsProjects}>
            <img
              className={styles.buildIcon}
              loading="lazy"
              alt=""
              src="/build.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.officesFrame}>
        <div className={styles.starGroup}>
          <div className={styles.frameglobalPresence}>
            <div className={styles.frameglobalPresenceChild} />
            <a className={styles.aboutUs}>About us</a>
            <a className={styles.projects}>Projects</a>
            <a className={styles.agents}>Agents</a>
            <a className={styles.services}>Services</a>
            <a className={styles.listings}>Listings</a>
            <img
              className={styles.vuesaxlinearsearchNormalIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlinearsearchnormal.svg"
            />
          </div>
        </div>
        <div className={styles.enterEmail}>
          <div className={styles.getaQuote}>
            <div className={styles.loremipsumdrenderingisometricf}>
              <a className={styles.otherServices}>Other services</a>
            </div>
            <div className={styles.newParentName}>
              <div className={styles.arrowFrame}>
                <img
                  className={styles.vuesaxlineararrowRightIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineararrowright@2x.png"
                />
              </div>
              <button className={styles.menu} />
            </div>
          </div>
        </div>
        <button className={styles.framebookNowReadMore}>
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </header>
  );
};

export default ProjectsFrame;
