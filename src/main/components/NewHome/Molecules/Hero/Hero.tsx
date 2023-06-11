import styles from "./Hero.module.css";
import hero from "../../assets/hero.png";


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>
        EMERGENCY MEDICAL SYSTEM
        </h1>
        <p>
        The emergency medical system (EMS) is a network of medical services and personnel designed to provide emergency medical care to individuals in need. It is typically activated in response to urgent situations, such as accidents, injuries, or sudden illness.
        </p>
      </div>
      <div className={styles.image}>
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
