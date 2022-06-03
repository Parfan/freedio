import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const navigate = useNavigate();

  function validatePassword() {
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) // Check if password has special character
      && /\d/.test(password) // Check if password has number
      && /[A-Z]/.test(password) // Check if password has uppercase
      && password.length >= 8) // Check if password has at least 8 characters
    {
      return true;
    }
    return false;
  }

  function confirmPasswordMatch() {
    return password === confirmPassword;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isPasswordValidated = validatePassword();
    const isPasswordMatch = confirmPasswordMatch();

    // Check if password has all the requirements
    if (!isPasswordValidated) {
      setErrorMessage(`
        Sua senha deve conter ao menos 8 caracteres, contendo ao menos,
        um caracter especial,
        um caracter numérico,
        um caracter maiúsculo.
      `)
      setShowErrorMessage(true);
      setIsErrorMessage(true);
      return;
    }
    // Check if user confirmed the password correctly
    if (!isPasswordMatch) {
      setErrorMessage("As senhas que você digitou não são compatíveis.")
      setShowErrorMessage(true);
      setIsErrorMessage(true);
      return;
    }
    
    axios.post("http://26.197.111.55:6789/usuario/registrar", null, {
      params: {
        email: email,
        cpf: CPF,
        nome: name,
        senha: password
      }
    }).then((resp) => {
      setIsErrorMessage(false);
      setShowErrorMessage(true);
      setErrorMessage("Login realizado com sucesso.\nRedirecionando...");
      // Redirects to the login page
      setTimeout(() => navigate("/login"), 3000);
    }).catch(err => {
      if (err.status === 400) {
        setErrorMessage("Este email ou CPF já foi cadastrado.");
      } else {
        setErrorMessage("Um erro inesperado ocorreu, tente novamente mais tarde.");
      }
      setIsErrorMessage(true);
      setShowErrorMessage(true);
    });
  }

  function handleCPF(e) {
    const cpf = e.target.value.trim().replace(".");
    if (!isNaN(cpf) && cpf.length <= 11) {
      setCPF(cpf);
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Cadastro</h1>
        <label>
          <span>Email <span style={{ color: "red" }}>*</span></span>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
            placeholder="Digite o email"
            required
          />
        </label>
        <label>
          <span>CPF <span style={{ color: "red" }}>*</span></span>
          <input
            type="text"
            value={CPF}
            onChange={handleCPF}
            placeholder="Digite o seu CPF"
            required
          />
        </label>
        <label>
          <span>Nome <span style={{ color: "red" }}>*</span></span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value.trim())}
            placeholder="Digite o seu nome"
            required
          />
        </label>
        <label>
          <span>Senha <span style={{ color: "red" }}>*</span></span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value.trim())}
            placeholder="Digite uma senha"
            required
          />
        </label>
        <label>
          <span>Confirmar senha <span style={{ color: "red" }}>*</span></span>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value.trim())}
            placeholder="Repita a senha"
            required
          />
        </label>
        {showErrorMessage ? (
          <p className={styles.error} style={{ backgroundColor: isErrorMessage ? "tomato" : "green" }}>
            {errorMessage}
          </p>
        ) : false}
        <button type="submit">Cadastrar</button>
        <p className={styles.login}>Já possui uma conta? <Link to="/login">Entrar</Link></p>
      </form>
    </div>
  )
}

export default SignUpForm;