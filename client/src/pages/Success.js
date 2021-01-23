// const express = require('express');
// const app = express();


// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

// app.post('order/sucess', async (req, res) => {
//     const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
//     const customer = await stripe.customers.retrieve(session.customer);

//     res.send();
// })