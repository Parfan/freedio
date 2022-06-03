import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

function Library() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch user library
    setCourses([
      {
        id: 123,
        title: 123,
        author: 123,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugiat assumenda suscipit dolore debitis id, eveniet optio quis, laudantium neque enim nisi sapiente! Ex debitis minima id ratione libero? Minus!"
      }, {
        id: 456,
        title: 456,
        author: 456,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugiat assumenda suscipit dolore debitis id, eveniet optio quis, laudantium neque enim nisi sapiente! Ex debitis minima id ratione libero? Minus!"
      }, {
        id: 789,
        title: 789,
        author: 789,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugiat assumenda suscipit dolore debitis id, eveniet optio quis, laudantium neque enim nisi sapiente! Ex debitis minima id ratione libero? Minus!"
      }, {
        id: 789,
        title: 789,
        author: 789,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugiat assumenda suscipit dolore debitis id, eveniet optio quis, laudantium neque enim nisi sapiente! Ex debitis minima id ratione libero? Minus!"
      }, {
        id: 789,
        title: 789,
        author: 789,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugiat assumenda suscipit dolore debitis id, eveniet optio quis, laudantium neque enim nisi sapiente! Ex debitis minima id ratione libero? Minus!"
      }
    ]);
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
