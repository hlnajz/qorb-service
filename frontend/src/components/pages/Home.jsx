import React from "react";
import styles from "./../Home.module.css";
import man from "../../assets/man.png";
import Footer from "./assets/Footer";

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.content}>
              <p className={styles.description}>
                <h1 className={styles.title}>NOUVELLE POTENTIEL</h1>
                QORB est votre plateforme d'échange professionnelle.
                <br />
                Écoulez vos invendus, obtenez des échantillons et goodies,
                <br /> le tout en tissant des liens et découvrant de nouvelles
                opportunités d'affaires. Simple, Moins chère et Efficace,
                <br />
                QORB booste votre activité commerciale.
              </p>
              <a href="mailto:myemail@email.com" className={styles.signUpBtn}>
                Sign Up
              </a>
            </div>
            <div className="image-container">
              <img src={man} alt="QORB" className={styles.heroImg} />
            </div>
          </div>
        </div>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};
