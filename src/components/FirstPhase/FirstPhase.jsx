import { Col, Container, Row } from "react-bootstrap";
import imageOne from "/src/assets/first-image.jpg"

const FirstPhase = () => {
  return (
    <div className="first-phase">
      <Container className="py-3">
        <Row className="d-flex justify-content-center align-items-center py-5">
          <Col xs={12} md={7} className="p-0 mb-5 mb-md-0 ps-2 ps-md-0">
            <div className="">
              <h1 className="ls mb-0 text-big poppins-font">Lessons and insights</h1>
              <h1 className="innertext ls text-big poppins-font">from 8 years</h1>
              <span className="text-extra-small d-block mb-4">
                Where to grow your bussiness as a photographer: site or social
                media?
              </span>
              <button className="first-phase-btn">Register</button>
            </div>
          </Col>
          <Col xs={12} md={5} className="p-0">
            <div className="img-div-first-phase">
              <img src={imageOne} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FirstPhase