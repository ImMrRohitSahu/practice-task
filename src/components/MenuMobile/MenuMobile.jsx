import { useContext, useEffect } from "react";
import { NavLink, Row } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

// eslint-disable-next-line react/prop-types
const MenuMobile = ({ userName, setIsOpenNav, isOpenNav, setShowLoginModal, setShowSignUpModal }) => {
    const {isAuth, authLogoutHandler} = useContext(AuthContext)
  const handleResize = () => {
    setIsOpenNav(false);
  };

  const handleScroll = () => {
    setIsOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const manuCloseLinkHandler = () => {
    setIsOpenNav(false);
  };
  return (
    <>
      <Row className="nav-open-close">
        <div
          className={
            isOpenNav ? "openNavDiv transition" : "closeNavDiv transition"
          }
        >
          <div>
            <div className="userProfile w-100 py-4 mb-3 text-center">
              <div className="userImage m-auto">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
              </div>
              <h6 className="m-0 mt-2 text fw-bold">{isAuth ? userName : "Guest"}</h6>
            </div>
            <div className="navdiv pb-3">
              <ul className="w-100 m-0 p-0 nav-ul d-flex flex-column justify-content-start align-items-center">
                <li className="nav-li my-2">
                  <NavLink className="link" onClick={manuCloseLinkHandler}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-li my-2">
                  <NavLink
                    className="link"
                    onClick={manuCloseLinkHandler}
                  >
                    Service
                  </NavLink>
                </li>
                <li className="nav-li my-2">
                  <NavLink
                    className="link"
                    onClick={manuCloseLinkHandler}
                  >
                    Features
                  </NavLink>
                </li>
                <li className="nav-li my-2">
                  <NavLink
                    className="link"
                    onClick={manuCloseLinkHandler}
                  >
                    Product
                  </NavLink>
                </li>
                <li className="nav-li my-2">
                  <NavLink
                    className="link"
                    onClick={manuCloseLinkHandler}
                  >
                    Testimonial
                  </NavLink>
                </li>
                <li className="nav-li my-2">
                  <NavLink
                    className="link"
                    onClick={manuCloseLinkHandler}
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navLogin d-flex flex-column align-items-center my-1 py-1">
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
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default MenuMobile;
