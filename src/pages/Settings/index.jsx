import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

function Settings() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [CVV, setCVV] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { userInfo, setUserInfo, setIsLogged } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    axios.put(`http://26.197.111.55:6789/usuario/alterar?cpf=${userInfo.id}&nome=${name.trim()}&email=${email}`)
      .then((resp) => {
        console.log("Dados alterados! " + resp.status);
        setUserInfo({ ...userInfo, nome: name.trim(), email });
        setIsLogged(false);
      }).catch(err => {
        console.log(err)
      });
  }

  function handleCardSubmit(e) {
    e.preventDefault();

    axios.post("http://26.197.111.55:6789/usuario/cartao/adicionar", null, {
      params: {
        cpf: userInfo.id,
        nome: userInfo.nome,
        numCartao: cardNumber,
        vencimento: validity,
        codSeguranca: CVV
      }
    }).then((resp) => {
      console.log("Cartão adicionado! " + resp.status);
      setUserInfo({ ...userInfo, cartao: {
        nome: userInfo.nome,
        numCartao: cardNumber,
        validade: validity,
        codSeguranca: CVV
      }});
      navigate("/");
    }).catch(err => {
      console.log(err)
    });
  }

  function removeCard() {
    if (userInfo.cartao) {
      axios.delete(`http://26.197.111.55:6789/usuario/cartao/remover?numCartao=${userInfo.cartao.numCartao}`)
        .then((resp) => {
          console.log("Cartão removido! " + resp.status);
          const newInfo = userInfo;
          delete newInfo["cartao"];
          setUserInfo(newInfo);
          navigate("/");
        }).catch(err => {
          console.log(err)
        });
    }
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();

    if (password.length > 0) {
      axios.put(`http://26.197.111.55:6789/usuario/alterar/senha?cpf=${userInfo.id}&senha=${password}`)
        .then((resp) => {
          console.log("Senha alterada! " + resp.status);
          setIsLogged(false);
        }).catch(err => {
          console.log(err)
        });
    }
  }

  function deleteAccount() {
    axios.delete(`http://26.197.111.55:6789/usuario/remover?cpf=${userInfo.id}`)
      .then(resp => {
        console.log(resp.data);
        setIsLogged(false);
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <main>
      <div className={styles.container}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Configurações</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
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
              onChange={e => setName(e.target.value)}
              placeholder="Digite o seu nome"
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <form onSubmit={handleCardSubmit} className={styles.form}>
          <label>
            <span>Número do cartão</span>
            <input
              type="text"
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value.trim())}
              placeholder="Digite o número do cartão"
              required
            />
          </label>
          <label>
            <span>Vencimento</span>
            <input
              type="text"
              value={validity}
              onChange={e => setValidity(e.target.value.trim())}
              placeholder="Digite a validade do cartão"
              required
            />
          </label>
          <label>
            <span>Código de segurança</span>
            <input
              type="password"
              value={CVV}
              onChange={e => setCVV(e.target.value.trim())}
              placeholder="Digite o código de segurança"
              required
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <button className={styles.form} onClick={removeCard}>Remover cartão</button>
        <form onSubmit={handlePasswordSubmit} className={styles.form}>
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
        <button className={styles.form} onClick={deleteAccount}>Deletar conta</button>
      </div>
    </main>
  )
}

export default Settings;
