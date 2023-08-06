import AssignmentVideo from "../components/video";
import Container from "react-bootstrap/Container";

const Video = () => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <h2>Assignment video</h2>
          <AssignmentVideo />
        </div>
      </div>
    </Container>
  );
};

export default Video;
