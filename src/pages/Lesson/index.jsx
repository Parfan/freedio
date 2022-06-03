import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LessonSidebar from "../../components/LessonSidebar";
import styles from "./styles.module.css";

const comments = [
  {
    id: 1,
    comment: "Comentário deste usuário, descrevendo alguma opinião ou dúvida sobre a aula."
  },
  {
    id: 2,
    comment: "Comentário deste usuário, descrevendo alguma opinião ou dúvida sobre a aula."
  },
  {
    id: 3,
    comment: "Comentário deste usuário, descrevendo alguma opinião ou dúvida sobre a aula."
  },
];

const lessons = [
  {
    id: 123,
    courseId: 123,
    title: "Lesson title",
    duration: "17m 03s"
  },
  {
    id: 456,
    courseId: 123,
    title: "Lesson title",
    duration: "16m 34s"
  },
  {
    id: 789,
    courseId: 123,
    title: "Lesson title",
    duration: "5m 09s"
  }
];

function Lesson() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [course, setCourse] = useState([]);
  const [lesson, setLesson] = useState({});
  const { course_id, lesson_id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://26.197.111.55:6789/curso?id=${course_id}`)
      .then(resp => {
        setCourse(resp.data);
        setLesson(resp.data.aulas.filter(item => item.id == lesson_id)[0]);
        setShowSidebar(true);
      }).catch(err => {
        console.log(err);
        navigate("/404");
      });
  }, []);

  return (
    <div className={styles.lesson}>
      <main className={styles.main}>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/rdcuOytxjKY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.info}>
          <h1>{lesson.titulo}</h1>
          <hr />
          <h2>Descrição</h2>
          <p>{lesson.descricao}</p>
          <hr />
          <h2>Comentários</h2>
          {comments.map(comment => (
            <div key={comment.id} className={styles.commentCard}>
              <h4><Link to={`/user/${comment.id}`}>Usuário {comment.id}</Link></h4>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </main>
      {showSidebar ? <LessonSidebar lessons={course.aulas} /> : false}
    </div>
  );
}

export default Lesson;
