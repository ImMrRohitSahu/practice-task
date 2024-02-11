import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Demo = () => {
  return (
    <Container fluid className="mt-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} className="p-0">
          <div className="demo-img d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-light text-big w-50 text-center">Pellentesque suscipit fringilla libero eu.</h1>
            <button className="first-phase-btn mt-3">Get a Demo <BsArrowRight className="ms-1" /></button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Demo;
