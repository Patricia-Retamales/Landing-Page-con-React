import { Nav, Navbar } from "react-bootstrap";
import './Style.css';
function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="barra">
         
        Start Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="menu">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#deets">Services</Nav.Link>
            <Nav.Link href="#memes">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Menu;