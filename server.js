require('dotenv').config();

// Configuration check.
// Disable this at your own risk
require('./utils/verifyConfiguration')();

// Requiring necessary npm packages
const express = require('express');
const path = require('path');
// Requiring our routes
const routes = require('./controllers');
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models');
// Bringing in Morgan, a nice logger for our server
const morgan = require('morgan');
// Compression
const compression = require('compression');
// Creating express app
const app = express();

const stripe = require('stripe')('sk_test_51I9ilkLEoVxAcGevEaTlvbhBbUnlWxqWqVBfkzSBhx9AP5q4rhtUtwF1rkqZHbH19XYbBujvyWMDFau466l6XivY00wUf0WFzF');

app.use(express.static('.'));
app.use(express.json());

const calculateOrderAMount = items => {
   // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;

};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
   // Create a PaymentIntent with the order amount and currency
   const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
});

res.send({
  clientSecret: paymentIntent.client_secret
});
});

app.listen(4242, () => console.log('Node server listening on port 4242'));