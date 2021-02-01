import './home.css';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const CreateRaffles = () => {
    // History and location are hooks we can use to manipulate our page's history!
    const [itemName, setItemName] = useState('');
    const [code, setItemCode] = useState('');
    const [maximumEntries, setMaximumEntries] = useState('');
    const [minimumEntries, setMinimumEntries] = useState('');
    const currentEntries = 0;
    const winnerOfRaffle = '';
    const [redirectToViewRaffle, toggleRedirect] = useState(0);
    console.log(itemName, code, minimumEntries, maximumEntries, currentEntries, winnerOfRaffle);


    const handleSubmit = event => {
        event.preventDefault();
        postRaffle({ itemName, code, minimumEntries, maximumEntries });
    };

    function postRaffle(data) {
        axios.post('/api/raffles', data).then(({ data }) => {
            toggleRedirect(data.id);
        });
    }

    if (redirectToViewRaffle) {
        // If someone goes to login, this transfers the redirect
        return <Redirect to={{
            pathname: `/viewRaffle/${redirectToViewRaffle}`,
        }}
        />;
    }

    return (
<<<<<<< HEAD
        <div className="raffle">
            <div className="raffletitle">
                <h1>Create A Raffle</h1>
            </div>
            <Form className="createraffleform">
=======
        <div>
            <h2>
                Create A Raffle
            </h2>

            <Form>
>>>>>>> origin
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
                    <Form.Control type="maximumEntries" onChange={event => setMaximumEntries(event.target.value)} placeholder="Maximum Entries" />
                    <Form.Text id="maximumEntries" muted>
                        This will limit your maximum number of entries (currently 50)
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Minimum Entries</Form.Label>
                    <Form.Control type="minimumEntries" onChange={event => setMinimumEntries(event.target.value)} placeholder="Maximum Entries" />
                    <Form.Text id="minimumEntries" muted>
                        This will limit your minimum number of entries (currently 5)
                    </Form.Text>
                </Form.Group>
                <Button variant="outline-dark" onClick={handleSubmit}>Submit</Button>
            </Form>

        </div>
    );
};
export default CreateRaffles;

// making a change