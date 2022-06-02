import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Plans() {
  return (
    <main className="container">
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Conheça nossos planos</h1>
      <div className={styles.plansContainer}>
        <div className={styles.card}>
          <div className={styles.planTitle}>
            <h2>Plano 1</h2>
            <p>O plano inclui:</p>
          </div>
          <ul className={styles.benefits}>
            <li>Vantagem 1</li>
            <li>Vantagem 2</li>
            <li>Vantagem 3</li>
            <li>Vantagem 4</li>
          </ul>
          <Link to="/">Continuar</Link>
        </div>
        <div className={styles.card}>
          <div className={styles.planTitle}>
            <h2>Plano 2</h2>
            <p>O plano inclui:</p>
          </div>
          <ul className={styles.benefits}>
            <li>Vantagem 1</li>
            <li>Vantagem 2</li>
            <li>Vantagem 3</li>
            <li>Vantagem 4</li>
          </ul>
          <Link to="/">Continuar</Link>
        </div>
        <div className={styles.card}>
          <div className={styles.planTitle}>
            <h2>Plano 3</h2>
            <p>O plano inclui:</p>
          </div>
          <ul className={styles.benefits}>
            <li>Vantagem 1</li>
            <li>Vantagem 2</li>
            <li>Vantagem 3</li>
            <li>Vantagem 4</li>
          </ul>
          <Link to="/">Continuar</Link>
        </div>
      </div>
    </main>
  )
}

export default Plans;
