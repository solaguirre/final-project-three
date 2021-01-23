const express = require('express');
const app = express();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

app.post('create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        paymentMethodTypes: ['card'],
        lineItems: [
            {
                priceData: {
                    currency: 'usd',
                    productData: {
                        name: 'Weffle Tickets',
                        images: ['https://imgur.com/gallery/EgSjR'],

                    },
                    unitAmount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        successUrl: `${OUR_DOMAIN}?sucess=true`,
        cancelUrl: `${OUR_DOMAIN}?canceled=true`,
    });

    res.json({ id: session.id });
});

