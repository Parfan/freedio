import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Course() {
  const [showCourse, setShowCourse] = useState(false);
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();
  const { course_id } = useParams();

  useEffect(() => {
    axios.get(`http://26.197.111.55:6789/curso?id=${course_id}`)
      .then(resp => {
        setCourse(resp.data);
        setShowCourse(true);
        console.warn(resp.data);
      }).catch(err => console.log(err));
  }, []);

  return (
    <>
      {course === null ? navigate("/404") : (

        <main className="container">
          <section className={styles.info}>
            <div>
              <h1>{course.titulo} {course_id}</h1>
              <p className={styles.description}>{course.descricao}</p>
              <p>Curso por: {course.autor}</p>
              {/* <p>{course.rating} ({course.ratingAmount} avaliações)</p> */}
              <p>Quantidade de aulas: {course.numAulas}</p>
            </div>
            <div className={styles.purchase}>
              <h3>Evite interrupções</h3>
              <Link to={`/purchase/${course_id}`}>Comprar curso</Link>
            </div>
          </section>
          <section className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/rdcuOytxjKY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
          <section className={styles.links}>
            <h2>Não perca tempo e comece agora mesmo!</h2>
            {showCourse ? (
              <Link to={`lesson/${course.aulas[0].id}`}>Começar o curso</Link>
            ) : false}
          </section>
        </main>
      )}
    </>
  )
};

export default Course;
