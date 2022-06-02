import { useNavigate } from "react-router-dom";
import Menu from "../Menu";
import styles from "./styles.module.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className={styles.navbar}>
      <span className={styles.logo} onClick={() => navigate("/")}>FREEDIO</span>
      <Menu />
    </header>
  );
}

export default Navbar;
