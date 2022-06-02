import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";

function PurchaseCourse() {
  const [cartao, setCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [CVV, setCVV] = useState("");
  const [showErrorMessage, ] = useState(false);
  const [errorMessage, ] = useState("");
  const { course_id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(course_id);
  }

  return (
    <main className="container">
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Comprar curso</h1>
          <label>
            <span>Cartão de Crédito <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={cartao}
              onChange={e => setCartao(e.target.value.trim())}
              placeholder="Número do cartão"
              required
            />
          </label>
          <label>
            <span>Data de validade <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={validade}
              onChange={e => setValidade(e.target.value.trim())}
              placeholder="Número do cartão"
              required
              />
          </label>
          <label>
            <span>CVV <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={CVV}
              onChange={e => setCVV(e.target.value.trim())}
              placeholder="3 dígitos"
              required
            />
          </label>
          {showErrorMessage ? (
            <p className={styles.error}>
              {errorMessage}
            </p>
          ) : false}
          <button type="submit">Comprar</button>
        </form>
      </div>
    </main>
  )
}

export default PurchaseCourse;
