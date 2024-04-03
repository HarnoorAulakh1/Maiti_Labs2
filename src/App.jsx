import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import styles from "./App.module.css";
import Frame from "./components/Cards/Frame.jsx";

function App() {
  return (
    <div className={styles.outer}>
      <Navbar />
      <div className={styles.heading}>
        <p className={styles.project}>Explore Our Projects!</p>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      <Frame />
      <Footer />
    </div>
  );
}

export default App;
