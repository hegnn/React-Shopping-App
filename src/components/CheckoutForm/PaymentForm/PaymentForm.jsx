import React from 'react'
import { Typography, Divider} from '@material-ui/core'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'
import CardDetails from './CardDetails'

const stripePromise = loadStripe('pk_test_51IfVHJFoh3TmyHNVx9y3vDZPuLnVefNpRRncw2BIOrnqKZ0UeGbQvjg1iedkSDWBGhEMSMrknXrKSFM5rgEIOzpw00Sykj6fin')

const PaymentForm = ({ cartItems, backStep, nextStep, deleteAllCart }) => {
    
    return (
        <>
            <Review cartItems={cartItems} />
            <Divider/>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0'}}> Payment Method </Typography>
            <Elements stripe={stripePromise}>
                <CardDetails backStep={backStep} nextStep={nextStep} deleteAllCart={deleteAllCart}/>
            </Elements>
        </>
    )
}

export default PaymentForm
