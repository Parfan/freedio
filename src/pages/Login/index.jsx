import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.form}>
      <form>
        <div>
          <label>Usuário</label>
          <input type="text" />
        </div>
        <div>
          <label>Senha</label>
          <input type="text" />
        </div>
        <button onClick={() => navigate("/")}>Entrar</button>
      </form>
    </div>
  )
}

export default Login;