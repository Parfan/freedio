import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import styles from "./styles.module.css";
import { StudyingSVG } from "../../assets/svg/StudyingSVG.jsx";

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

function Home() {
  return (
    <main className="container">
      <section className={styles.banner}>
        <div className={styles.bannerOptions}>
          <h1>Bem-vindo!</h1>
          <p>Comece seus estudos agora mesmo e/ou conheça nossos planos para menores distrações</p>
          <Link to="/">Começar os estudos</Link>
          <Link to="/plans">Conheça nossos planos</Link>
        </div>
        <StudyingSVG />
      </section>
      <Carousel cards={cards}>Cursos em promoção</Carousel>
      <Carousel cards={cards}>Cursos recomendados</Carousel>
      <Carousel cards={cards}>Promoções de <Link to="/404">Blender 3D</Link></Carousel>
    </main>
  );
}

export default Home;
