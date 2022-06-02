import Card from "./Card";
import styles from "./styles.module.css";

function LessonSidebar(props) {
  return (
    <aside className={styles.lessonSidebar}>
      <div className={styles.otherLessons}>
        <h3>Outras aulas do curso</h3>
      </div>
      {props.lessons.map((lesson, index) => (
        <Card
          key={index}
          index={index + 1}
          id={lesson.id}
          courseId={lesson.courseId}
          title={lesson.title}
          duration={lesson.duration}
        />
      ))}
    </aside>
  );
}

export default LessonSidebar;
