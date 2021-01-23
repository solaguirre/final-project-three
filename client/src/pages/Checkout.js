// import React from 'react';

// function Checkout() {
   
//     // adding event handler to checkout button
//     const handleClick = async (event) => {
//         const stripe = await StripePromise;

//         const response = await fetch('/create-checkout-session', { method: 'POST' });

//         const session = await response.json();

//         const result = await stripe.redirectToCheckout({
//             sessionId: session.id,
//         });
//         if (result.error) {

//         }
//     };

//     return (
//         <button type="button" role="link"> Checkout </button>
//     );
// }

// export default Checkout;