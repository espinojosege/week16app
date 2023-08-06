import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/104717830?v=4"
            />
            <Card.Body>
              <Card.Title>Contact Me</Card.Title>
              <Card.Text>
                Thank you for reviewing my Final Project. It has been very
                exciting to work on, appreciate your time. Thank you!
              </Card.Text>
              <Button variant="warning">
                <a
                  href="https://github.com/espinojosege"
                  className="btn btn-warning"
                >
                  My Github
                </a>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
