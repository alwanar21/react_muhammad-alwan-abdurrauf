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
                    <Nav className=" ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link className='text-primary '>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/product">
                            <Nav.Link className='text-primary '>Product</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="login">
                            <Nav.Link className='text-primary ms-3' >Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarHome;