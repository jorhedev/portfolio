/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import RightNav from "./RightNav";
import Burger from "./Burger";

const Navbar = ({ handleModeToggle, darkMode }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
      <Link to={'/'} onClick={scrollToTop}>Jorhe.</Link>
      </div>
      {/* <button onClick={handleModeToggle}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button> */}
      {/* <div className={styles.menu}></div> */}
      <Burger/>
    </div>
  );
};

export default Navbar;
