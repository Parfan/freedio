import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function FakeCarousel({ title }) {
  const navigate = useNavigate();

  return (
    <>
      <h1>{title}</h1>
      <section className={styles.section}>
        <button>{"<"}</button>
        <div className={styles.card} onClick={() => navigate("/watch/123")}>
          <img src="https://picsum.photos/200" alt="" />
          <div className={styles.info}>
            <h3>Título do curso</h3>
            <div>
              <p>Autor do curso</p>
              <p>4.5/5</p>
            </div>
          </div>
        </div>
        <div className={styles.card} onClick={() => navigate("/watch/123")}>
          <img src="https://picsum.photos/200" alt="" />
          <div className={styles.info}>
            <h3>Título do curso</h3>
            <div>
              <p>Autor do curso</p>
              <p>4.5/5</p>
            </div>
          </div>
        </div>
        <div className={styles.card} onClick={() => navigate("/watch/123")}>
          <img src="https://picsum.photos/200" alt="" />
          <div className={styles.info}>
            <h3>Título do curso</h3>
            <div>
              <p>Autor do curso</p>
              <p>4.5/5</p>
            </div>
          </div>
        </div>
        <button>{">"}</button>
      </section>
    </>
  )
}

export default FakeCarousel;