import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import firebase from "../../utils/firebase";
import { useAuth } from "../../hooks/useAuth";

enum Modal {
  Login,
  Register,
}

const Layout: React.FC = ({ children }) => {
  const [user] = useAuth();
  const [busy, setBusy] = useState(false);
  const [modal, setModal] = useState<Modal>();

  const handleLogout = async () => {
    setBusy(true);
    await firebase.logout();
    setBusy(false);
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Movie App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link to="/reviews">Reviews</Link>
            </Nav.Link>
            <Nav.Item className="ml-auto">
              {user ? (
                <>
                  <Navbar.Text className="mr-sm-2">
                    Signed in as: {user.displayName}
                  </Navbar.Text>
                  <Button
                    variant="outline-danger"
                    className="mr-sm-2"
                    disabled={busy}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  {busy && <Spinner variant="danger" animation="border" />}
                </>
              ) : (
                <>
                  <Button
                    variant="outline-warning"
                    className="mr-sm-2"
                    onClick={() => setModal(Modal.Register)}
                  >
                    Register
                  </Button>
                  <Button
                    variant="outline-success"
                    className="mr-sm-2"
                    onClick={() => setModal(Modal.Login)}
                  >
                    Login
                  </Button>
                </>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <LoginModal
        show={modal === Modal.Login}
        onClose={() => setModal(undefined)}
      />
      <RegisterModal
        show={modal === Modal.Register}
        onClose={() => setModal(undefined)}
      />
    </Container>
  );
};

export default Layout;
