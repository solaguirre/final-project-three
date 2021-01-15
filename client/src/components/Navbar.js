import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Navdropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

const Menu = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            <h3>Navbar</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/notes'>Notes</Link></li>
                {isLoggedIn() ?
                    <>
                        <li>Hello, {getProfile().email}</li>
                        <li><Link onClick={() => logout()} to='/'>Logout</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                }

            </ul>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Weffle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Host</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Winners</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign Up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;