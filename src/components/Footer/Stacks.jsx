import { useState } from "react";
import styles from "./Footer.module.css";

// eslint-disable-next-line react/prop-types
function Stacks({heading,items}) {
    // eslint-disable-next-line no-unused-vars
    const [data,set]=useState(items);
  return (
    <div className={styles.stackout}>
        <p className={styles.heading}>{heading}</p>
        <div className={styles.stackin}>
            {data.map((item) => (
                <div className={styles.item} key={item}>
                    <p className={styles.inner} >{item}</p>
                    </div>
            ))}
        </div>
    </div>
  );
}

export default Stacks;
