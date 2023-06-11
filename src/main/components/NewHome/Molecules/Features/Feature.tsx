import styles from "./Feature.module.css";
import ambulance from "../../assets/ambulance.png";
import preHospital from "../../assets/preHostipal.png";
import box from "../../assets/box.png";
import { Hospital } from "iconsax-react";

const Feature = () => {
  return (
    <div className={styles.feature}>
      <h2>Product Core Features</h2>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <img src={ambulance} alt="ambulance" width="150rem"/>
          <div className={styles.content}>
            <h4>Custom assessment parameters</h4>
            <p>
              Test your engineers on the things that matter the most to your
              company’s growth.
            </p>
          </div>
        </div>
        <div className={styles.left}>
          <img src={preHospital} alt="preHospital" width="150rem" />
          <div className={styles.content}>
            <h4>Automated evaluations and scoring</h4>
            <p>
              Get clear and intuitive evelauations for every member of your team
              in a fully automated system that does all the work.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <img src={box} alt="box" />
          <div className={styles.content}>
            <h4>All-inclusive assessments</h4>
            <p>
              skript tests are simple to take and can be used across a variety
              of engineering teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
