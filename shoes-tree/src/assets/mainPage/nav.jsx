import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../image/logo.webp"

const NavTop=()=>{
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="men">Men</Nav.Link>
            <Nav.Link as={Link} to="women">Women</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}
export default NavTop;