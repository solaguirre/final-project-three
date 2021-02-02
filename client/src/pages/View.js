import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './home.css';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const View= () => {
    const [raffle, setRaffle, itemName, currentEntries, maximumEntries] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchRaffle();
    });

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
                <Form>
                    <Form.Group controlId="itemName">
                        <h2>{itemName}</h2>

                    </Form.Group>
                    <h2>{currentEntries} / {maximumEntries}</h2>

                    <h2>{availableEntries}</h2>

                    <Button ><Link to={`/checkout/${id}`}>Submit entries</Link></Button>
                </Form>
            </Container>
        </>  
    );
};

export default View;