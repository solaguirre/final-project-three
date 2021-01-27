const express = require('express');
const app = express();

const stripe = require('stripe')('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

const weffleTickets = items => {

    return 5;
};

app.post('/create-payment-intent', async (req, res) => {
    const {items} = req.body;
})
const paymentIntent = await stripe.paymentIntents.create({
    amount: weffleTickets(items),
    currency: 'usd',

    metadata: {integration_check: 'accept_a_payment'},
});

res.send({
    clientSecret: paymentIntent.clientSecret
});

const paymentMethod = await stripe.paymentMethods.create({
  type: 'card',
  card: {
    number: '4242424242424242',
    exp_month: 1,
    exp_year: 2022,
    cvc: '314',
  },
});

