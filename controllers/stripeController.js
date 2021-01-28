const express = require('express');
const router = require('express').Router();

const stripe = require('stripe')('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

const OUR_DOMAIN = 'http://localhost:5000/checkout';

router.post('/', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        paymentMethodTypes: ['card'],
        lineItems: [
            {
                priceData: {
                    currency: 'usd',
                    productData: {
                        name: 'Weffle Ticket',
                        //  updated with image of weffle ticket
                        images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unitAmount: 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        successURL: `${OUR_DOMAIN}?success=true`,
        cancelURL: `${OUR_DOMAIN}?canceled=true`,
    });
    res.json({ id: session.id });
});

module.exports = router;