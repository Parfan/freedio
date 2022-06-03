import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import styles from "./styles.module.css";

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
  const { id } = useParams();

  useEffect(() => {

  }, [id]);

  return (
    <main className="container">
      {id}
      <div className={styles.info}>
        <h1>Usuário</h1>
        <div>
          <h2>Sobre</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus at quibusdam facere iste ducimus et provident quis, impedit voluptate aspernatur mollitia nisi neque dicta. Fuga quam cupiditate error provident?</p>
        </div>
      </div>
      {id % 2 === 0 && <Carousel cards={cards}>Meus cursos</Carousel>}
    </main>
  );
}

export default Profile;
