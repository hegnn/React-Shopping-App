import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core'
import useStyles from './styles'
import AdressForm from '../AdressForm/AdressForm'
import PaymentForm from '../PaymentForm/PaymentForm'
import Confirmation from '../Confirmation'

const steps = ['Shipping adress', 'Payment details']

const Checkout = ({ cartItems, deleteAllCart }) => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)  
    const [shippingData, setShippingData] = useState({})

    const nextStep = () => setActiveStep((prev) => prev + 1)
    const backStep = () => setActiveStep((prev) => prev - 1)

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const Forms = () => activeStep === 0 ?  <AdressForm next={next} /> : <PaymentForm cartItems={cartItems} backStep={backStep} nextStep={nextStep} deleteAllCart={deleteAllCart}/>

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout} >
                 <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                      {
                          steps.map((step)=>(
                              <Step key={step}>
                                  <StepLabel>{step}</StepLabel>
                              </Step>
                          ))
                      }
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation shippingData={shippingData} /> : <Forms/>}
                 </Paper>
            </main>
        </>
    )
}

export default Checkout
