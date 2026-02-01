import styles from "./Footer.module.css";

function Foorter() {
  return (
    <footer className={`${styles.container}`}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 Mazraetak. All rights reserved.</p>

          <ul className={styles.footerLinks}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>

          <div className={styles.social}>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/home">
              <i className="fab fa-x"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
  );
}

export default Foorter;
