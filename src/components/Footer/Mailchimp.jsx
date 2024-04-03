import styles from "./Footer.module.css";
function Mailchimp() {
  return (
    <div className={styles.mailchimp}>
      <input type="text" placeholder="Write your query here" />
      <button className={styles.btn}><p>Send</p></button>
    </div>
  );
}

export default Mailchimp;
