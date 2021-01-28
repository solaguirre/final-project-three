import { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import useAuth from '../hooks/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateRaffles = () => {
    // const { CreateRaffle, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    // const history = useHistory();
    // const location = useLocation();
    const [itemName, setItemName] = useState('');
    const [itemCode, setItemCode] = useState('');
    const [maximumEntries, setMaximumEntries] = useState('');
    console.log(itemCode, itemName, maximumEntries);
    // For our redirector
    // const [redirectToLogin, toggleRedirect] = useState(false);
    // // This is the key part to our redirector. We can pull the prior location out here, if it exists
    // const { from } = location.state || { from: { pathname: '/' } };

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     signup(email, password).then(res => {
    //         // Go back to whence you came!
    //         history.replace(from);
    //     });
    // };

    // if (isLoggedIn()) {
    //     return <Redirect to={location.state || '/'} />;
    // }

    // if (redirectToLogin) {
    //     // If someone goes to login, this transfers the redirect
    //     return <Redirect to={{
    //         pathname: '/login',
    //         state: { from: from }
    //     }}
    //     />;
    // }

    return (
        <div>
            <h2>
                Create A Raffle
            </h2>


            <Form>
                <Form.Group controlId="itemName">
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control type="itemName" onChange={event => setItemName(event.target.value)} placeholder="Enter Item to be raffled" />
                    <Form.Text className="text-muted">
                        This is how your item will be named
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="itemCode">
                    <Form.Label>Item Code</Form.Label>
                    <Form.Control type="itemCode" onChange={event => setItemCode(event.target.value)} placeholder="Item Code" />
                    <Form.Text id="itemCode" muted>
                        This will be hidden from view but will be revealed to the Winner
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Maximum Entries</Form.Label>
                    <Form.Control type="maximumEntries" onChange={event => setMaximumEntries(event.target.value)} placeholder = "Maximum Entries" />
                    <Form.Text id="maximumEntries" muted>
                        This will limit your maximum number of entries (currently 50)
                    </Form.Text>
                </Form.Group>

                <Button variant="outline-dark">Submit</Button>
            </Form>
            <p>
            </p>
        </div>
    );
};

export default CreateRaffles;