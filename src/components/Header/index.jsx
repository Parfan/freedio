import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1 onClick={() => navigate("/")}>FREEDIO</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/search">Buscar</Link></li>
          <li><Link to="/subscribe">Nossos Planos</Link></li>
          <li><Link to="/library">Biblioteca</Link></li>
          <li><Link to="/login">Entrar</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;