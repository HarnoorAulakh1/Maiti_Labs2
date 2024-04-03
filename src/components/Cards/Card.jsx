import Content from "./Content";
import styles from "./Card.module.css";

// eslint-disable-next-line react/prop-types
function Card({ img, heading, para, short }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <Content heading={heading} para={para} short={short}/>
    </div>
  );
}

export default Card;
