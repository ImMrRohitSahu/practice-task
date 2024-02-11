import { useContext, useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

// eslint-disable-next-line react/prop-types,
const Login = ({ showLoginModal, setShowLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const { authLoginHandler } = useContext(AuthContext);

  const handleClose = () => {
    setShowLoginModal(false);
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("placementTask");
    if (userDataString) {
      const parseUserData = JSON.parse(userDataString);
      setData(parseUserData);
      console.log(parseUserData);
    }
  }, []);

  const loginMatchHandler = () => {
    if (!data) {
      setError("No user data found");
      return;
    }

    const user = data.find(
      (item) => item.email === email && item.password === password
    );

    if (user) {
      authLoginHandler(user.name);
      setShowLoginModal(false)
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <Container className="my-4">
      <Modal show={showLoginModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-center align-items-center input-group">
            <div className="input">
              <input
                type="eamil"
                autoFocus
                placeholder="Enter Your Registered Email..."
                onChange={(e) => setEmail(e.target.value)}
                className="my-3"
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Enter Your Password..."
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3"
              />
            </div>
          </div>
          <div className="text-center">
            <span className="text-danger">{error}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={loginMatchHandler} className="loginbtn">
            Login Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Login;
