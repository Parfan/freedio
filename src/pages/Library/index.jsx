import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

function Library() {
  const [courses, setCourses] = useState([]);
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch user library
    axios.get(`http://localhost:6789/usuario/cursos/adquiridos?cpf=${userInfo.id}`)
      .then(resp => {
        setCourses(resp.data);
      }).catch(err => console.error(err));

    
  }, []);

  return (
    <main className="container">
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
              <h4>{course.title}</h4>
              <p className={styles.author}>{course.author}</p>
              <p className={styles.description}>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Library;
