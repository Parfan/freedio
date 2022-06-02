import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../../Icons";
import styles from "./styles.module.css";

function Card(props) {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/course/${props.courseId}/lesson/${props.id}`)}>
      <h4 className={styles.title}>
        {props.index}. {props.title}
      </h4>
      <div className={styles.duration}>
        <PlayIcon width="1.5rem" height="1.5rem" />
        <p style={{ display: "inline-block" }}>
          {props.duration}
        </p>
      </div>
    </div>
  );
}

export default Card;
