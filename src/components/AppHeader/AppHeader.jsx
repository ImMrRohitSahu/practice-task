import { useContext, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Headroom from "react-headroom";
import { IoMenu } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthContext";
import SignUpModal from "../SignupModal/SignupModal";
import LoginModal from "../LoginModal/LoginModal";
import MenuMobile from "../MenuMobile/MenuMobile";

const AppHeader = () => {
  const { isAuth, authLogoutHandler, userName } = useContext(AuthContext);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <>
        <Headroom>
      <Container fluid className="header p-0">
          <Row className="m-0 py-3 px-md-4 px-1 d-flex justify-content-between align-items-center scroll-nav">
            <Col xs={8} md={2} className="p-0">
              <div className="brand-logo ps-2">
                <span className="fs-3">digi</span>
                <span className="fs-3">alpha</span>
              </div>
            </Col>
            <Col
              xs={0}
              md={7}
              className="d-none d-md-flex justify-content-center flex-grow-1 flex-shrink-2 p-0"
            >
              <Nav className="d-flex justify-content-between">
                <Nav.Link className="nav-link">Home</Nav.Link>
                <Nav.Link className="nav-link">Service</Nav.Link>
                <Nav.Link className="nav-link">Feature</Nav.Link>
                <Nav.Link className="nav-link">Product</Nav.Link>
                <Nav.Link className="nav-link">Testimonial</Nav.Link>
                <Nav.Link className="nav-link">FAQ</Nav.Link>
              </Nav>
            </Col>
            <Col
              xs={2}
              className="d-none d-md-flex justify-content-end flex-grow-1 p-0"
            >
              {!isAuth && (
                <div className="btn-div">
                  <button
                    className="login-btn"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login
                  </button>
                  <button
                    className="sign-btn"
                    onClick={() => setShowSignUpModal(true)}
                  >
                    Sign up
                  </button>
                </div>
              )}
              {isAuth && (
                <>
                  <h6 className="text-small mb-0 mt-2 me-3">{userName}</h6>
                  <div className="btn-div">
                    <button
                      className="sign-btn btn-danger"
                      onClick={() => authLogoutHandler()}
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </Col>
            <Col xs={4} className="d-flex d-md-none justify-content-end">
              <div className="menu-div">
                <IoMenu
                  className={
                    isOpenNav
                      ? "d-block d-md-none fs-3 mt-1 ms-4 rotate transition"
                      : "d-block d-md-none fs-3 mt-1 ms-4 transition"
                  }
                  onClick={() => setIsOpenNav(!isOpenNav)}
                />
              </div>
            </Col>
          </Row>
          {isOpenNav && (
            <MenuMobile
              userName={userName}
              setIsOpenNav={setIsOpenNav}
              isOpenNav={isOpenNav}
              setShowLoginModal={setShowLoginModal}
              setShowSignUpModal={setShowSignUpModal}
            />
          )}
      </Container>
        </Headroom>
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
        setShowLoginModal={setShowLoginModal}
      />
      {showLoginModal && (
        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
        />
      )}
    </>
  );
};

export default AppHeader;
