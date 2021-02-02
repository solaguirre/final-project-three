import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Raffles = function () {
    const [raffles, setRaffles] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new raffle!

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch raffles again.
    useEffect(() => {
        fetchRaffles();
    }, []);

    // Check out that include!
    async function fetchRaffles() {
        const { data } = await axios.get('/api/raffles');
        setRaffles(data);
    }
    return (
        <>
            <Container className="container">
                <h2>Raffles</h2>

                {raffles.map(raffle => {
                    return (
                        <>
                            {raffle.itemName}
                            <button key={raffle.id}>
                                <Link to={`/viewraffle/${raffle.id}`}>View Raffle </Link>
                            </button>
                        </>
                    );
                })}
            </Container>
        </>
    );
};

export default Raffles;