import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

function PurchaseCourse() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [CVV, setCVV] = useState("");
  const [showErrorMessage, ] = useState(false);
  const [errorMessage, ] = useState("");

  const navigate = useNavigate();
  const { course_id } = useParams();
  const { userInfo, isLogged } = useContext(UserContext);

  useEffect(() => {
    if (!isLogged)
      navigate("/login");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`http://localhost:6789/usuario/curso/adquirir?cpf=${userInfo.id}&id=${course_id}&comprou=${true}`)
      .then(resp => {
        console.log("comprou " + course_id);
        navigate(`/course/${course_id}`)
      }).catch(err => console.error(err));
  }

  return (
    <main className="container">
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Comprar curso</h1>
          <label>
            <span>Nome impresso <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Digite o nome impresso"
              required
            />
          </label>
          <label>
            <span>Número do cartão <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value.trim())}
              placeholder="Digite o número do cartão"
              required
            />
          </label>
          <label>
            <span>Data de validade <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={validity}
              onChange={e => setValidity(e.target.value.trim())}
              placeholder="Digite o vencimento do cartão"
              required
              />
          </label>
          <label>
            <span>CVV <span style={{ color: "red" }}>*</span></span>
            <input
              type="password"
              value={CVV}
              onChange={e => setCVV(e.target.value.trim())}
              placeholder="Digite o código de segurança"
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
