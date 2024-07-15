import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoIcon from "../assets/pokeapi-logo.svg"

function PokeNavbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar className="navbar-color" expand="lg">
      <Container className='navbar-control'>
        <Navbar.Brand as={NavLink} to="/">
          {" "}
          <img src={LogoIcon} className="d-inline-block align-top" width="50%" alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbartext">
            <Nav.Link as={NavLink} to="/" exact className={setActiveClass}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pokemones" className={setActiveClass}>
              Pokemones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PokeNavbar;
