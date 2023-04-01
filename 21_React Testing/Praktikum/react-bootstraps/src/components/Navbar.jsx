import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function NavbarHome() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Simple Header</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className=" ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link className='text-primary '>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="createProduct">
                            <Nav.Link className='text-primary ms-3' >Product</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="user">
                            <Nav.Link className='text-primary ms-3' >User</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarHome;