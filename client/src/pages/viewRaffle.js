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
    },[]);

    async function fetchRaffle() {
        const { data } = await axios.get('/api/raffles/'+id);
        setRaffle(data);
    }
    console.log(raffle);

    return (
        <div>
            <Form>
                <Form.Group controlId="itemName">
                    <Form.Label>Item Description</Form.Label>

                </Form.Group>
                <h2>currentEntries / {raffle.maximumEntries}</h2>

                <h2>avaialable entries</h2>

                <button ><Link to={`/checkout/${id}`}>Submit entries</Link></button>
            </Form>
        </div>

    );
};
export default ViewRaffles;
