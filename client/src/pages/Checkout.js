import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

function Checkout() {
    // const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret] = useState('');
    const elements = useElements();

    useEffect(() => {
        if (stripe) {
            const pr = stripe.paymentRequest({
                currency: 'usd',
                total: {
                    label: 'Demo total',
                    amount: 1099, 

                },
                requestPayerName: true,
                requestPayerEmail: true,
            });

            pr.canMakePayment().then(result => {
                if (result) {
                    setPaymentRequest(pr);
                }
            });
        }

    }, [stripe]);

    if (paymentRequest) {
        return <PaymentRequestButtonElement options={{ paymentRequest }} />;
    }

    const cardStyle = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#32325d'
                }
            },
            invalid: {
                color: '#fa755',
                iconColor: '#fa755a'
            }
        }
    };

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            paymentmethod: {
                card: elements.getElement(CardElement)
            }
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    return (
        <form id='payment-form' onSubmit={handleSubmit}>
            <CardElement id='card-element' options={cardStyle} onChange={handleChange} />
            <button
                disabled={processing || disabled || succeeded}
                id='submit'>
                <span id='button-text'>
                    {processing ? (
                        <div className='spinner' id='spinner'></div>
                    ) : (
                        'Pay'
                    )}
                </span>
            </button>

            {error && (
                <div className='card-error' role='alert'>
                    {error}
                </div>
            )}
            <p className={succeeded ? 'result-message' : 'result-message hidden'}>
                Payment succeeded, see the result in your
                <a
                    href={'https://dashboard.stripe.com/test/payments'}>
                    {''}
                    Stripe dashboard.
                </a>
            </p>
        </form>
    );
}
export default Checkout;