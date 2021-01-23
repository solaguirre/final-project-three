import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Navdropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import useAuth from '../hooks/auth';


const Menu = () => {
    // const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            {/* <h3>Navbar</h3> */}
            {/* <ul>
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

            </ul> */}

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Weffle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Host</Nav.Link>
                        <Nav.Link href="#link">Winners</Nav.Link>
                        <NavDropdown title="Options" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/login">Login</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/signup">Sign Up</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Raffles" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;