import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './home.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

const Signup = () => {
    const { signup, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // For our redirector
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = event => {
        event.preventDefault();
        signup(email, password).then(res => {
            // Go back to whence you came!
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToLogin) {
        // If someone goes to login, this transfers the redirect
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }

    return (
        <div>
            <Container className="containers">
                <div className="ticket">
                    <h2>Signup Page</h2>
                    <Form className="form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={event => setEmail(event.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={event => setPassword(event.target.value)} placeholder="Password" />
                            <Form.Text id="passwordHelpBlock" muted>
                                Must be 8-20 characters long.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Receive Updates" />
                        </Form.Group>
                        <Button variant="outline-dark" onClick={handleSubmit}>Submit</Button>
                    </Form>
                    <Row>
                        <p>Already have an account? </p>
                        <Button variant="outline-dark" onClick={() => toggleRedirect(true)}>Login Here</Button>
                        
                    </Row>
                </div>
            </Container>

        </div>
    );
};

export default Signup;