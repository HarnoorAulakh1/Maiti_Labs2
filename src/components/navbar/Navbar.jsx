import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.img}></div>
        <p>DeCarbonn</p>
      </div>
      <button className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          />
        </svg>
      </button>
      <div className={styles.stack}>
        <p className={styles.links}>Home</p>
        <p className={styles.links}>Carbon Calculator</p>
        <p className={styles.links}>Projects</p>
        <p className={styles.links}>About</p>
        <p className={styles.links}>Team</p>
        <button className={styles.connectButton}>
          <p className={styles.connectText}>Connect →</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
