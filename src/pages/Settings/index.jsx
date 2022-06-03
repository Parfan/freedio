import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

function Settings() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = useContext(UserContext);

  useEffect(() => {
    setEmail(userInfo.email);
    setName(userInfo.name);
    if (userInfo.card) {
      setCardNumber(userInfo.card.number);
    }
  }, []);

  function handleSubmit() {
    // axios.put("");
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Configurações</h1>
        <label>
          <span>Email</span>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
            placeholder="Digite o email"
          />
        </label>
        <label>
          <span>Nome</span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value.trim())}
            placeholder="Digite o seu nome"
          />
        </label>
        <label>
          <span>Número do cartão</span>
          <input
            type="text"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value.trim())}
            placeholder="Digite o número do cartão"
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value.trim())}
            placeholder="Digite a nova senha"
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </main>
  )
}

export default Settings;
