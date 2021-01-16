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

// *** not sure about this const YOUR_DOMAIN

const YOUR_DOMAIN = 'http://localhost:4242;'

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

// Set up our middleware!
// Dev Logging. Only works in test or development
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// enable compression middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add all our backend routes
app.use(routes);

// Send all other requests to react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({force:false}).then(function () {
    if (process.env.NODE_ENV === 'test') {
        db.User.create({ email: 'test@test.com', password: 'password' }).then(
            () => {
                console.log('Test User Created');
            }
        );
    }
    app.listen(PORT, function () {
        console.log(`Server now on port ${PORT}!`);
    });
});

// **Prebuilt Checkout code obtained from stripe.com/docs/checkout/integration-builder

// Stripe Checkout

app.post('/create-checkout session', async (req, res) => {
  const session = await stripe.checkout.session.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachements',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.js`,
    cancel_url: `${YOUR_DOMAIN}/cancel.js`,
  });
  res.json({ id: session.id });
});

// ****** does it need this more than once??
app.listen(4242, () => console.log('Running on port 4242'));

// stripe payment webhook

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  let event;
  try {
    event = JSON.parse(request.body);
  } catch (err) {
    console.log(`⚠️  Webhook error while parsing basic request.`, err.message);
    return response.send();
  }
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));