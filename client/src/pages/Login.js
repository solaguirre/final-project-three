import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './home.css';

const Login = () => {
    const { login, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // For our redirector
    const [redirectToSignup, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = event => {
        event.preventDefault();
        login(email, password).then(res => {
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToSignup) {
        return <Redirect to={{
            // If someone goes to signup, this transfers the redirect
            pathname: '/signup',
            state: { from: from }
        }}
        />;
    }

    return (
        <>
            <Container className="containers">
                <div className="ticket" >
                    <h1>Login Page</h1>
                    <Form className="form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={event => setEmail(event.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={event => setPassword(event.target.value)} placeholder="Password" />

                        </Form.Group>

                        <Button onClick={handleSubmit} variant="outline-dark">Submit
                        </Button>
                    </Form>
                </div>
            </Container>
            <Row className="signup">
                <p>Need an account?</p>
                <Button className="signbutton"variant="outline-dark" onClick={() => toggleRedirect(true)}>Signup Here
                </Button>
            </Row>
        </>

    );
};

export default Login;