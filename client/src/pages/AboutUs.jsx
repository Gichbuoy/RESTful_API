import Layout from "../components/layout/Layout";
import { Col, Row } from "react-bootstrap";

const AboutUs = () => {
  //Showcase project authors
  return (
    <Layout>
      <h3 class="text-center">About Us</h3>
      <Row class="justify-content-center">
        <div class="text-center">
          This project was done by Alex Miricho [ Backend ] and Wellington Mwadali [ Frontend ] as <br/>the final project for the 
          foundation period in ALX Software Engineering bootcamp.
          <br />Happy Coding!
        </div>
      </Row>
    </Layout>
  );
};

export default AboutUs;