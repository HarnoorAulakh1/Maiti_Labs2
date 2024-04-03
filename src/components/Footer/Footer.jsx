import styles from "./Footer.module.css";
import Mailchimp from "./Mailchimp";
import SocialStack from "./SocialStack";
import Stacks from "./Stacks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
        <div className={styles.logo}>
          <div className={styles.frame}>
            <div className={styles.img}></div>
          </div>
          <p>DeCarbonn</p>
        </div>
        <p className={styles.query}>Have any query?</p>
        <Mailchimp />
        <SocialStack />
      </div>
      <p className={styles.endText}>Made with ❤️ at MaitiLabs</p>
      <div className={styles.stacks}>
        <Stacks heading="COMPANY" items={["Home", "Project", "About"]} />
          <Stacks
            heading="INNITIATIVES"
            items={["Maiti Labs", "DeCarbonn", "GreenBit"]}
          />
      </div>
      <p className={styles.copyright}>Copyright   ⓒ    2024    <b>DeCarbonn</b></p>
    </footer>
  );
}

export default Footer;
