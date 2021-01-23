import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/Navdropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/auth';


const Menu = () => {
    // const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Weffle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Host</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto-align">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;