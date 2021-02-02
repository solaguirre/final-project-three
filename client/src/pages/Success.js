// sample integration from stripe docs
import { Link } from 'react-router-dom';
import './home.css';

function Success() {
    return (
        <div>
            <div className="container">
                <div className="ticket">

                    <h1>Your payment was successful!</h1>
                    <Link to="/">Back to Weffle.me</Link>

                </div>
            </div >
        </div>


    );
}

export default Success;