import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import styles from "./styles.module.css";
import axios from "axios";

const cards = [
  {
    id: 1,
    image: "https://picsum.photos/200",
    title: "Card title",
    author: "Card author",
    rating: 4.5,
    ratingAmount: 123,
    price: 589.90,
    tag: "Card tag",
  },
  {
    id: 2,
    image: "https://picsum.photos/200",
    title: "Card title",
    author: "Card author",
    rating: 4.5,
    ratingAmount: 123,
    price: 129.90,
    tag: "Card tag",
  },
  {
    id: 3,
    image: "https://picsum.photos/200",
    title: "Card title",
    author: "Card author",
    rating: 4.5,
    ratingAmount: 123,
    price: 450.00,
    tag: "Card tag",
  },
  {
    id: 4,
    image: "https://picsum.photos/200",
    title: "Card title",
    author: "Card author",
    rating: 4.5,
    ratingAmount: 123,
    price: 450.00,
    tag: "Card tag",
  },
  {
    id: 5,
    image: "https://picsum.photos/200",
    title: "Card title",
    author: "Card author",
    rating: 4.5,
    ratingAmount: 123,
    price: 129.90,
    tag: "Card tag"
  },
];

function Profile() {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    axios.get(`http://26.197.111.55:6789/cursos/proprios?cpf=${userInfo.id}`)
      .then(resp => {
        console.log(resp.data);
        setCourses(resp.data);
      }).catch(err => console.log(err));
  }, [id]);

  function createCourse() {
    
  }

  return (
    <main className="container">
      <div className={styles.info}>
        <h1>Usuário</h1>
        <div>
          <h2>Sobre</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus at quibusdam facere iste ducimus et provident quis, impedit voluptate aspernatur mollitia nisi neque dicta. Fuga quam cupiditate error provident?</p>
        </div>
      </div>
      {courses.length > 0 ? (
        <Carousel cards={courses}>Meus cursos</Carousel>
      ) : false}
      {userInfo.id === id && (
        <button onClick={createCourse}>Criar curso</button>
      )}
    </main>
  );
}

export default Profile;
