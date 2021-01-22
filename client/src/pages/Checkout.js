import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51I9ilkLEoVxAcGevAMmbHYfJHwTJKS8Ke0E9idRjrddfOntO3THaaFUnFZCjtgSdYJolxpNuopxJBTNif5u5VVnP008s3CP4Ke');

const ProductDisplay = ({ handleClick }) => (
    <section>
        <div className='product'>
            <img
                src='https://imgur.com/gallery/EgSjR' alt='waffles' />
            <div className='description'>
                <h3>Weffle Tickets</h3>
                <h5>$20.00</h5>
            </div>
        </div>
        <button id='checkout-button' role='link' onClick={handleClick}>
      Checkout
        </button>
    </section>
);

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Checkout() {
    const [message, setMessage] = useState('');
    useEffect(() => {
    // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            setMessage('Order placed! You will receive an email confirmation.');
        }
        if (query.get('canceled')) {
            setMessage(
                'Order canceled -- continue to shop around and checkout when you are ready.'
            );
        }
    }, []);
    const handleClick = async (event) => {
        const stripe = await stripePromise;
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
        });

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };
    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay handleClick={handleClick} />
    );
}