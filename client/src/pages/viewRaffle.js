import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import './home.css';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

const ViewRaffles = () => {
    const [raffle, setRaffle] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetchRaffle();
    },);

    async function fetchRaffle() {
        const { data } = await axios.get('/api/raffles/'+id);
        setRaffle(data);
    }
    console.log(raffle);

    function availableEntries() {
        const availableEntries = raffle.maximumEntries - raffle.currentEntries;
        return availableEntries;
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="itemName">
                    <Form.Label>{raffle.itemName}</Form.Label>

                </Form.Group>
                <h2>{raffle.currentEntries} / {raffle.maximumEntries}</h2>

                <h2>{availableEntries}</h2>

                <button ><Link to={`/checkout/${id}`}>Submit entries</Link></button>
            </Form>
        </div>

    );
};
export default ViewRaffles;
