import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Featured = () => {
  return (
    <Container className="my-5">
      <Row >
        <Col className="d-flex flex-column align-items-center">
          <h1 className="fs-2">Carring is the new marketing</h1>
          <p className="px-5 featured-para text-small text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={5} lg={4} className="mb-5 p-0 p-sm-2">
          <div className="featured featured-one">
            <div className="featured-innerdiv">
              <h4 className="text-center fs-6">
                Createing Streamlined Safegauarding Processes with OneRen
              </h4>
              <button className="featured-btn">
                Readmore <BsArrowRight className="ms-1" />
              </button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={5} lg={4} className="mb-5 mt-4 mt-md-0 p-0 p-sm-2">
          <div className="featured featured-two">
            <div className="featured-innerdiv">
              <h4 className="text-center fs-6">
                What are your Safegauarding responsibilities and how can you manage them?
              </h4>
              <button className="featured-btn">
                Readmore <BsArrowRight className="ms-1" />
              </button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={5} lg={4} className="mb-5 mt-4 mt-lg-0 p-0 p-sm-2">
          <div className="featured featured-three">
            <div className="featured-innerdiv">
              <h4 className="text-center fs-6">
                Revamping the Membership Model with The Triathlon Australia
              </h4>
              <button className="featured-btn">
                Readmore <BsArrowRight className="ms-1" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
