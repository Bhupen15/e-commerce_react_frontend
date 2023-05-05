import React, { useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";


import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../Services/AdminServices";



function Header() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);


    let auth = localStorage.getItem("user");


    const submitHandler = async (e: any) => {
        e.preventDefault();
        let data = new FormData(e.target);

        const result = await imageUpload(data);
        if (result) {

            setOpen(false);
        }

    }

    const logout = () => {
        localStorage.clear();
        navigate("/register");
    }
    return (
        <>
            <Modal isOpen={open} size='md' toggle={() => setOpen(!open)} >
                <ModalHeader >Update details</ModalHeader>

                <ModalBody>

                    <form onSubmit={submitHandler}>

                        <Row className='mt-2'>
                            <Col className='mt-2' >
                                <div style={{ fontSize: "x-medium", textTransform: "capitalize" }}>Upload Image: </div>

                                <input type="file" name='image' />


                            </Col>
                        </Row>



                        <Row className='mt-4'>
                            <Col lg={12} className="row">
                                <div className='d-flex justify-content-end'>
                                    <button type="button" onClick={() => { setOpen(false) }} className="col-md-3 ms-2 btn btn-danger"  >Cancel</button>
                                    <button type='submit' className="col-md-3 ms-2 btn btn-primary">Upload</button>

                                </div>
                            </Col>
                        </Row>
                    </form>
                </ModalBody>
            </Modal>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="/">Teacher Guide</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        <Nav className="me-auto">
                            {auth ? <>
                                <Nav.Link onClick={() => { setOpen(!open) }} >
                                    <img src={""} style={{ borderRadius: "100%", width: "30px ", height: "30px " }} alt="" />
                                    {/* src={user.image} */}
                                </Nav.Link>
                                {<LinkContainer to="/">
                                    <Nav.Link >Products</Nav.Link>
                                </LinkContainer>}

                                {<LinkContainer to="/add">
                                    <Nav.Link >Add Product</Nav.Link>
                                </LinkContainer>}

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