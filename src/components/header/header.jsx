import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpen,
  FaBlog,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const expand = "lg";
  return (
    <>
      <Navbar variant="dark" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="dark"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Cristian Scarlat PFA
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                <Nav.Link
                  href="/public"
                  className={pathname === "/" ? "current" : ""}
                >
                  <FaHome size="1.5rem" />
                  <span className="ms-3">Home</span>
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className={pathname === "/about" ? "current" : ""}
                >
                  <FaUser size="1.5rem" />
                  <span className="ms-3">About</span>
                </Nav.Link>
                <Nav.Link
                  href="/portfolio"
                  className={pathname === "/portfolio" ? "current" : ""}
                >
                  <FaBriefcase size="1.5rem" />
                  <span className="ms-3">Portfolio</span>
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className={pathname === "/contact" ? "current" : ""}
                >
                  <FaEnvelopeOpen size="1.5rem" />
                  <span className="ms-3">Contact</span>
                </Nav.Link>
                <Nav.Link
                  href="/blog"
                  className={pathname === "/blog" ? "current" : ""}
                >
                  <FaBlog size="1.5rem" />
                  <span className="ms-3">Blog</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
