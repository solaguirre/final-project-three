const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

app.use(express.static('.'));
app.use(express.json());


const calculateOrderAmount = items => {

    return 1400;
};

app.post('/create-payment-intent', async (req, res) => {
    const { items } = req.body;
    // create paymentintent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: 'usd'
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
});