import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import styles from "./styles.module.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // const users = userContext.users;
    // // Test if user exists
    // let userId = "";
    // for (let u in users) {
    //   if (users[u].user === user) {
    //     userId = u;
    //     break;
    //   }
    // }
    // if (userId === "") {
    //   setErrorMessage("Este usuário não existe.");
    //   setShowErrorMessage(true);
    //   return;
    // }
    // // Check if password is correct
    // if (users[userId].password !== password) {
    //   setErrorMessage("A senha inserida está incorreta.");
    //   setShowErrorMessage(true);
    //   return;
    // }
    // setShowErrorMessage(false);

    // Completes the user log-in
    // localStorage.setItem("activeId", `["${userId}"]`);
    // userContext.setActiveId([userId]);

    axios.get(`http://localhost:6789/usuario/login?email=${email}&senha=${password}`)
      .then(resp => {
        if (resp.data === null) {
          setErrorMessage("Email ou senha inválida.");
          setShowErrorMessage(true);
        } else {
          setUserInfo({ id: resp.data.cpf, email: resp.data.email });
          setTimeout(() => navigate("/"), 1000);
        }
      }).catch(err => console.error(err));
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Entrar</h1>
        <label>
          <span>Email <span style={{ color: "red" }}>*</span></span>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
            placeholder="Digite seu email"
            required
          />
        </label>
        <label>
          <span>Senha <span style={{ color: "red" }}>*</span></span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value.trim())}
            placeholder="Digite sua senha"
            required
          />
        </label>
        {showErrorMessage ? (
          <p className={styles.error}>
            {errorMessage}
          </p>
        ) : false}
        <button type="submit">Entrar</button>
        <p className={styles.signup}>Não possui uma conta? <Link to="/signup">Cadastrar</Link></p>
      </form>
    </div>
  )
}

export default LoginForm;