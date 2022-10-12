import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavbarComponent extends React.Component {
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{"color":"white"}} href="#">TOKOTOK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbarref">
                            <Nav.Link style={{"color":"white"}}href="#">Home</Nav.Link>
                            <Nav.Link style={{"color":"white"}}href="#">Login</Nav.Link>
                            <Nav.Link style={{"color":"white"}}href="#">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}

export default NavbarComponent