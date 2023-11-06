import { Container } from "react-bootstrap";
import ReadUsers from './components/readUsers';

import "bootstrap/dist/css/bootstrap.min.css";

export default() => {
  return (
    <>
      <Container fluid>
        <ReadUsers />
      </Container>
    </>
  );
}


