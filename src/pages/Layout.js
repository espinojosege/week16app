import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const Layout = () => {
  return (
    <>
      <Container>
        <ButtonGroup aria-label="Navigation Links" className="my-2">
          <Button variant="primary">
            <Link to="/week16app" className="btn btn-primary">
              Home
            </Link>
          </Button>
          <Button variant="primary">
            <Link to="video" className="btn btn-primary">
              Video
            </Link>
          </Button>
          <Button variant="primary">
            <Link to="contact" className="btn btn-primary">
              Contact
            </Link>
          </Button>
        </ButtonGroup>
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;
