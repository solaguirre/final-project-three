import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/Navdropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import '../pages/home.css';

const Menu = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
<<<<<<< HEAD
        <>
            <Navbar fill bg="dark" variant="dark">
                <Navbar.Brand textcolor="white" href="/">Weffle </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />  
=======
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand textcolor="white" href="/">Weffle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
>>>>>>> origin
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/about">About</Link> •
                        <Link to="/createraffle">Host</Link> •
                        <Link to="/raffles">View Raffles</Link> •
                        <Link to="/checkout">WefflePress</Link> •
                    </Nav>
                    <Nav className="mr-auto-align">
                        {isLoggedIn() ?
                            <>
                                Hello, {getProfile().email}
                                <Link onClick={() => logout()} to='/' >Logout</Link>
                            </>
                            :
                            <>
                                <Link to="/signup">Signup</Link> •
                                <Link to="/login">Login</Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Menu;