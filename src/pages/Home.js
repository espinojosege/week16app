import Weather from "../components/Weather";
import Container from "react-bootstrap/Container";
import Gmap from "../components/services/gmapsApi";

const Home = () => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Weather />
          <Gmap />
        </div>
      </div>
    </Container>
  );
};

export default Home;
