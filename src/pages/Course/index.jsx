// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Course() {
  const course = {//const [course, setCourse] = useState({
    title: "Course title",
    description: "This is the description of this course.",
    author: "Author's name",
    rating: "4/5",
    ratingAmount: 381,
    lessonAmount: 53,
    previewUrl: "https://www.youtube.com/embed/rdcuOytxjKY"
  };//);
  const { course_id } = useParams();

  // useEffect(() => {
  //   // fetch course information
  //   setCourse({
  //     title: "Course title",
  //     description: "This is the description of this course.",
  //     author: "Author's name",
  //     rating: "4/5",
  //     ratingAmount: 381,
  //     lessonAmount: 53,
  //     previewUrl: "https://www.youtube.com/embed/rdcuOytxjKY"
  //   });
  // }, []);

  return (
    <main className="container">
      <section className={styles.info}>
        <div>
          <h1>{course.title} {course_id}</h1>
          <p className={styles.description}>{course.description}</p>
          <p>Curso por: {course.author}</p>
          <p>{course.rating} ({course.ratingAmount} avaliações)</p>
          <p>Quantidade de aulas: {course.lessonAmount}</p>
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
        <Link to="lesson/123">Começar o curso</Link>
      </section>
    </main>
  )
};

export default Course;
