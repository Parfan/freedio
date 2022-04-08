import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Search() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <h1>Pequisar</h1>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" id="categoria1" name="categoria1" value="Bike" />
        <label for="categoria1"> Categoria 1</label><br></br>
        <input type="checkbox" id="categoria2" name="categoria2" value="Bike" />
        <label for="categoria2"> Categoria 2</label><br></br>
        <input type="checkbox" id="categoria3" name="categoria3" value="Bike" />
        <label for="categoria3"> Categoria 3</label><br></br>
        <input type="checkbox" id="categoria4" name="categoria4" value="Bike" />
        <label for="categoria4"> Categoria 4</label><br></br>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <input type="submit" value="Pesquisar" />
      </form>
    </div>
  )
}

export default Search;