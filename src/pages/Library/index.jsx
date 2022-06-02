import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

function Library() {
  const [courses, setCourses] = useState([{ id: 123 }, { id: 456 }]);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <main className="container">
      <div className={styles.courseContainer}>
        {courses.map((course) => (
          <div
            key={course.id}
            className={styles.card}
            onClick={() => navigate(`/course/${course.id}`)}
          >
            {course.id}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Library;
