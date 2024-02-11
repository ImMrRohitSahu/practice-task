import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { GiBasketballBall } from "react-icons/gi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";


const AppFooter = () => {
  return (
    <Container fluid className="footer px-3">
      <Row className="p-5">
        <Col xs={12} md={5} className="mt-4 mb-4 mb-md-0">
          <div className="brand-logo mb-4">
            <span className="fs-3">digi</span>
            <span className="fs-3 text-light">alpha</span>
          </div>
          <div className="text-light text-small">
            <p className="mb-2">Copyright &copy; 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="d-flex justify-content-start mt-5">
            <FaInstagram className="text-light me-4 fs-5" />
            <GiBasketballBall className="text-light me-4 fs-5" />
            <FaTwitter className="text-light me-4 fs-5" />
            <FaYoutube className="text-light fs-5" />
          </div>
        </Col>
        <Col xs={12} md={3} className="d-flex justify-content-start g-2 mt-4">
          <div className="text-light d-flex flex-column">
            <h4 className="mb-4 fs-5">Company</h4>
            <span className="text-small mb-2">About us</span>
            <span className="text-small mb-2">Blog</span>
            <span className="text-small mb-2">Contact us</span>
            <span className="text-small mb-2">Pricing</span>
            <span className="text-small mb-2">Testimonials</span>
          </div>
          <div className="text-light d-flex flex-column ms-5">
            <h4 className="mb-4 fs-5">Support</h4>
            <span className="text-small mb-2">Help center</span>
            <span className="text-small mb-2">Terms of services</span>
            <span className="text-small mb-2">Legel</span>
            <span className="text-small mb-2">Privacy policy</span>
            <span className="text-small mb-2">Status</span>
          </div>
        </Col>
        <Col xs={12} lg={4} className="text-light px-1 px-lg-5 mt-4">
          <h4 className="mb-4 fs-5">Stay up to date</h4>
          <div className="email-footer-input d-flex justify-content-center align-items-center">
            <input type="email" placeholder="Your email address" />
            <IoPaperPlaneOutline className="fs-6 send-icon"/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppFooter;
