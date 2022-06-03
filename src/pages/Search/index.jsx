import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Search() {
  const [text, setText] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:6789/cursos`)
      .then(resp => {
        setCourses(resp.data);
      }).catch(err => console.error(err));
  }, []);

  function handleSearch() {
    axios.get(`http://localhost:6789/cursos/pesquisar?parametro=${text}`)
      .then(resp => {
        setCourses(resp.data);
      }).catch(err => console.error(err));
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
        <button onClick={handleSearch} className={styles.searchBtn}>Buscar</button>
      </div>
      <div className={styles.courseContainer}>
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={styles.card}
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <div className={styles.image}>
              <img src="https://picsum.photos/200" alt="Course thumbnail" />
            </div>
            <div className={styles.info}>
              <h4>{course.titulo}</h4>
              <p className={styles.author}>{course.autor}</p>
              <p className={styles.description}>{course.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Search;
