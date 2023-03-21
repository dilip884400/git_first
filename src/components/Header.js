import styles from "./styles.module.css";

export default function Header(props) {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>OnClick</div>
        <button className={styles.menuButton} onClick={props.toggleMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
        <nav className={props.showMenu ? styles.navOpen : styles.nav}> 
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#About Us">About Us</a>
            </li>
            <li>
              <a href="#Login">Login</a>
            </li>
            <li>
              <a href="#Sign Up">Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }