import { useState } from "react";
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../contexts/UserContext";
import styles from "./styles.module.css";

function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, ] = useState(false);
  const [errorMessage, ] = useState("");
  // const [showErrorMessage, setShowErrorMessage] = useState(false);
  // const [errorMessage, setErrorMessage] = useState<string>("");
  // const userContext = useContext(UserContext);
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
    setTimeout(() => navigate("/"), 1000);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Entrar</h1>
        <label>
          <span>Usuário <span style={{ color: "red" }}>*</span></span>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value.trim())}
            placeholder="Digite seu usuário"
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