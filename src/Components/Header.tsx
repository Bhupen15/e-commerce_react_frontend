import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate();

    let auth = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    

    const logout = () => {
        localStorage.clear();
        navigate("/register");
    }
    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="/">Teacher Guide</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        <Nav className="me-auto">
                            {auth ? <>
                                {<LinkContainer to="/">
                                    <Nav.Link >Products</Nav.Link>
                                </LinkContainer>}

                                {<LinkContainer to="/add">
                                    <Nav.Link >Add Product</Nav.Link>
                                </LinkContainer>}
                                {/* {<LinkContainer to="/update">
                                    <Nav.Link > Update Product</Nav.Link>
                                </LinkContainer>} */}


                                {<LinkContainer to="/profile">
                                    <Nav.Link >Profile</Nav.Link>
                                </LinkContainer>}
                                <LinkContainer onClick={logout} to="/register">
                                    <Nav.Link >Logout ({JSON.parse(auth).name}) </Nav.Link>
                                    {/* ({JSON.parse(auth).name}) */}
                                </LinkContainer></>

                                : <>   <LinkContainer to="/login">
                                    <Nav.Link >Login</Nav.Link>
                                </LinkContainer>
                                    <LinkContainer to="/register">
                                        <Nav.Link >Register</Nav.Link>
                                    </LinkContainer>  </>}



                        </Nav>


                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    )
}

export default Header