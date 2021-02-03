import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ViewRaffle = function () {
    const [raffle, setRaffle, itemName, currentEntries, maximumEntries] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchRaffle();
    }, [id]);

    async function fetchRaffle() {
        const { data } = await axios.get('/api/raffles/' + id);
        setRaffle(data);
    }

    function availableEntries() {
        const availableEntries = raffle.maximumEntries - raffle.currentEntries;
        return availableEntries;
    }

    return (
        <>
            <Container className="container">
                <Card>
                    <Form.Group controlId="itemName">
                        <h2>{itemName}</h2>

                    </Form.Group>

                    {raffle.map(raffle => {
                        return (
                            <>
                                {raffle.itemName}
                                <h2>{currentEntries} / {maximumEntries}</h2>

                                <h2>{availableEntries}</h2>
                            </>
                        );
                    })}
                    <Button className="checkoutbutton" variant="dark"><Link to='/checkout'>Submit entries</Link></Button>
                </Card>
            </Container>
        </>
    );
};

export default ViewRaffle;