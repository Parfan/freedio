import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Recommended(props) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/course/" + props.id)} className={styles.card}>
      <div className={styles.image}>
        <img src={props.image} alt={`Foto de capa do curso ${props.title}`} />
      </div>
      <div className={styles.info}>
        {props.id}
        <h4>{props.title}</h4>
        <p>{props.author}</p>
        {/* <p>{props.rating}/5 ({props.ratingAmount})</p> */}
        <p>R$ {props.price}</p>
        {/* <p className={styles.tag}>{props.tag}</p> */}
      </div>
    </div>
  );
}

export default Recommended;
