import { useState } from "react";
import styles from "./styles.module.css";

function Search() {
  const [text, setText] = useState("");

  function handleSearch() {
    
  }

  return (
    <main className="container">
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="O que deseja procurar?"
        />
        <button className={styles.searchBtn}>Buscar</button>
      </div>
    </main>
  )
}

export default Search;
