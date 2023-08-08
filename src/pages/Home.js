import Weather from "../components/Weather";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Weather />
        </div>
      </div>
    </Container>
  );
};

export default Home;
