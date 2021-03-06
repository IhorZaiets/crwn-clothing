import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Kj6sODhNxqyCdyMVHa4DdxsbX280o7DBumWfUxLhOY51zMihR8E9gkeB3NyYPj8fwbk9sDRR3cEIbUZsxJLPwzZ00fdHTxeV8'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}


export default StripeCheckoutButton;