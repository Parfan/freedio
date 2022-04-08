import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function FakeCategory() {
  return (
    <div className={styles.container}>
      <Link to="/search">Categoria 1</Link>
      <Link to="/search">Categoria 2</Link>
      <Link to="/search">Categoria 3</Link>
      <Link to="/search">Categoria 4</Link>
      <Link to="/search">Categoria 5</Link>
      <Link to="/search">Categoria 6</Link>
    </div>
  )
}

export default FakeCategory;