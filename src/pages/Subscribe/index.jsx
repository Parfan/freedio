import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Subscribe() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Plano 1</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt culpa ullam libero soluta fugiat accusantium ex aut laborum, eaque distinctio dolorum debitis. Fuga reprehenderit quos officiis nostrum aliquid sed excepturi?
        </p>
        <Link className={styles.btn} to="/">Assinar</Link>
      </div>
      <div className={styles.card}>
        <h1>Plano 2</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt culpa ullam libero soluta fugiat accusantium ex aut laborum, eaque distinctio dolorum debitis. Fuga reprehenderit quos officiis nostrum aliquid sed excepturi?
        </p>
        <Link className={styles.btn} to="/">Assinar</Link>
      </div>
      <div className={styles.card}>
        <h1>Plano 3</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt culpa ullam libero soluta fugiat accusantium ex aut laborum, eaque distinctio dolorum debitis. Fuga reprehenderit quos officiis nostrum aliquid sed excepturi?
        </p>
        <Link className={styles.btn} to="/">Assinar</Link>
      </div>
    </main>
  )
}

export default Subscribe;