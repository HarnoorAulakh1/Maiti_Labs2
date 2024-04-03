import styles from "./Card.module.css";

// eslint-disable-next-line react/prop-types
function Content({ heading, para, short}) {
  return (
    <div className={styles.content}>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.para}>{para}
      </p>
      <p className={styles.short}>{short}</p>
      <button className={styles.btn}><p>Learn More</p></button>
    </div>
  );
}

export default Content;
