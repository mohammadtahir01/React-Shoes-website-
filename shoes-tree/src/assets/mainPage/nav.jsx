import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../image/logo.webp"
//react icon 
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
//toolkit
import { useSelector } from 'react-redux';

const NavTop=()=>{
  const data = useSelector(state=>state.Card.Task);
  // console.log(data);
  const newdata = data.length;
    return(
        <>
        {/* <div style={{position:"sticky"}}> */}
         <Navbar data-bs-theme="dark" style={{backgroundColor: "#343a40"}}>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" style={{height:"32px"}} /></Navbar.Brand>
          <Nav className="me-auto d-flex justify-content-center w-100">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="men">Men</Nav.Link>
            <Nav.Link as={Link} to="women">Women</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
          </Nav>
           <div style={{display:"flex",gap:"1rem",color:"white",fontSize:"1.5rem"}}>
            <div>
          <FaHeart />
          </div>
          <div style={{display:"flex",alignItems:"center",position:"relative",top:"5px"}}>
          <FaShoppingCart />
          {
            newdata == 0 ?(<>
            <span style={{display:"none"}}><p>{newdata}</p></span></>):(<>
            <p style={{fontSize:"12px"}}>{newdata}</p></>)
          }
          </div>
        </div>
        </Container>
       
      </Navbar>
      {/* </div> */}
    </>
    )
}
export default NavTop;