import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

function Library() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch user library
    setCourses([{ id: 123 }, { id: 456 }, { id: 789 }, { id: 111 }, { id: 222 }]);
  }, []);

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
