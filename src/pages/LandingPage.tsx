import { FunctionComponent } from "react";
import ProjectsFrame from "../components/ProjectsFrame";
import PropertyManagerFrame from "../components/PropertyManagerFrame";
import ManageYourPropertyText from "../components/ManageYourPropertyText";
import Vuesaxlinedit from "../components/Vuesaxlinedit";
import ContactFrame from "../components/ContactFrame";
import LogoRectangle from "../components/LogoRectangle";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.aboutUsFrame}>
        <ProjectsFrame />
        <PropertyManagerFrame />
      </section>
      <ManageYourPropertyText />
      <Vuesaxlinedit />
      <ContactFrame />
      <LogoRectangle />
    </div>
  );
};

export default LandingPage;
