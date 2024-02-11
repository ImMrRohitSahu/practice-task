import { Col, Container, Row } from "react-bootstrap";

const SecondPhase = () => {
  return (
    <Container className="pt-2">
      <Row className="d-flex justify-content-center align-items-center py-5">
        <Col xs={12} md={5} className="p-0 mb-5 mb-md-0 ps-2 ps-md-0 order-2 order-md-1 mt-5 mt-md-0">
          <div className="img-div-first-phase">
            <img src="src/assets/second-image.jpg" />
          </div>
        </Col>
        <Col xs={12} md={7} className="p-0 ps-2 ps-md-0 order-1 order-md-2">
          <div className="pe-4">
            <h1 className="mb-3 fs-2">
              The unseen of spending three years at Pixelgrade
            </h1>
            <span className="text-extra-small d-block mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text
            </span>
            <button className="first-phase-btn">Learn More</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondPhase;
