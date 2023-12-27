import { useLocation } from "react-router-dom";
import { Logo } from "../../assets/images";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
