// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
  // const { course_id, lesson_id } = useParams();

  // useEffect(() => {
  //   // fetch lesson
  // }, []);

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
          <h1>Lesson title</h1>
          <hr />
          <h2>Descrição</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti veritatis eaque rem distinctio, modi nihil dolor omnis quod voluptate tenetur. Nemo exercitationem a corporis, nobis nisi alias recusandae aspernatur!</p>
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
      <LessonSidebar lessons={lessons} />
    </div>
  );
}

export default Lesson;
