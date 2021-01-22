const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

const bodyParser = require('body-parser');
const { response } = require('express');

app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (request, response) => {
    let event;

    try {
        event = JSON.parse(request.body);

    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
        case 'payment_intent.suceeded':
            const paymentIntent = event.stopImmediatePropagation.object;

            break;
        case 'payment_method.attached':
            const paymentMethod = event.stopImmediatePropagation.object;

            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    response.json({ received: true });
});

// app.use(express.static('.'));

// const OUR_DOMAIN = 'http://localhost:3000/checkout';

// app.post('create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//         paymentMethodTypes: ['card'],
//         lineItems: [
//             {
//                 priceData: {
//                     currency: 'usd',
//                     productData: {
//                         name: 'Weffle Tickets',
//                         images: ['https://imgur.com/gallery/EgSjR'],

//                     },
//                     unitAmount: 2000,
//                 },
//                 quantity: 1,
//             },
//         ],
//         mode: 'payment',
//         successUrl: `${OUR_DOMAIN}?sucess=true`,
//         cancelUrl: `${OUR_DOMAIN}?canceled=true`,
//     });

//     res.json({ id: session.id });
// });