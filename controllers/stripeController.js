const express = require('express');
const router = require('express').Router();

const stripe = require('stripe')('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

const OUR_DOMAIN = 'http://localhost:3000/checkout';

router.post('/', async (req, res) => {
    console.log(req.body.id);
    // const parsedId = JSON.parse(id);
    const data = {
        "payment_method_types": ['card'],
        "line_items": [
            {
                price : 'price_1IFAyrLEoVxAcGevC1kNltUL',
                quantity : 1
            },
        ],
        mode: 'payment',
        "success_url": `${OUR_DOMAIN}?success=true${req.body.id}`,
        "cancel_url": `${OUR_DOMAIN}?canceled=true${req.body.id}`,
    }

    console.log(data);
    const session = await stripe.checkout.sessions.create(data).catch(err => console.error(err));
    console.log(session);

    res.json({ id: session.id });
});

module.exports = router;