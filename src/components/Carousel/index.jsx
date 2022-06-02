import Carousel from "react-elastic-carousel";
import Recommended from "./Cards/Recommended";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselComponent(props) {
  return (
    <section className="carouselWrapper">
      <h2 className="carouselTitle">{props.children}</h2>
      <Carousel breakPoints={breakPoints}>
        {props.cards.map((card) => (
          <Recommended
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            author={card.author}
            rating={card.rating}
            ratingAmount={card.ratingAmount}
            price={card.price}
            tag={card.tag}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default CarouselComponent;
