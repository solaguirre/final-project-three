// sample integration from stripe docs
import { Link } from 'react-router-dom';
import './home.css';

function Canceled() {
    return (
        <div>
            <div className="container">
                <div className="ticket">

                    <h1>Your payment was canceled</h1>
                    <Link to="/checkout">Back to the WefflePress!</Link>

                </div>
            </div >
        </div>


    );
}

export default Canceled;