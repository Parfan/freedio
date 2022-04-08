import FakeCarousel from "../../components/FakeCarousel";
import FakeCategory from "../../components/FakeCategory";

function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <h1>Bem-vindo a FREEDIO</h1>
      <FakeCarousel title="Cursos em andamento" />
      <FakeCategory />
      <FakeCarousel title="Cursos em promoção" />
      <FakeCategory />
      <FakeCarousel title="Cursos recomendados" />
    </main>
  )
}

export default Home;