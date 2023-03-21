import styles from "./styles.module.css";

export default function Left() {
    return (
      <div className={styles.left}>
        <h2>Welcome to My Website</h2>
        <p>Let's bring your team together in onClick.</p>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
    );
  }