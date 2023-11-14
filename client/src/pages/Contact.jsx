import Layout from "../components/layout/Layout"
import { Col, Row } from "react-bootstrap";

const Contact = () => {
    const email1 = 'wellingtonmwadali@gmail.com';
    const email2 = 'lexizgichbuoy@gmail.com';
  return (
    //Showcase project authors' contact details
    <Layout>
      <h3 className="text-center">Contact Us</h3>
      <Row className="justify-content-center">
        <Col md={10}>
          <p class="text-center">
            Contact us at <span><a href={`mailto:${email1}`}>Wellington</a></span>/<span><a href={`mailto:${email2}`}>Alex</a></span>
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;