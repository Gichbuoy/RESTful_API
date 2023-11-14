import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // footer - has nav links to project routes
  return (
    <Container>
      <hr />
      <Row className="mt-5 mb-5 justify-content-center">
        <Col md={{ span: 3, offset: 1 }}>

          <NavLink className="text-muted fw-bold" to="/create">
            Create A User
          </NavLink>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>


          <NavLink className="text-muted" to="/about">
            About Us
          </NavLink>
        </Col>

        <Col md={{ span: 3 }}>

          <NavLink className="text-muted" to="/contact">
            Contact
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;