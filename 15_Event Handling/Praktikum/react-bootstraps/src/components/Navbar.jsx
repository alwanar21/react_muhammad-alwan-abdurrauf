import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarHome() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Simple Header</Navbar.Brand>
                    <Nav className=" ms-auto">
                        <Nav.Link className='bg-primary text-white rounded' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-primary' href="#features">Features</Nav.Link>
                        <Nav.Link className='text-primary' href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className='text-primary' href="#faqs">FAQs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarHome;