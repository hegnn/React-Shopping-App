import React from 'react'
import {Typography, Divider, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Confirmation = ({shippingData}) => {
    return (
        <div>
            <Typography variant="h5" > Thank you for your purchase, {shippingData.firstName + ' ' + shippingData.lastName}!  </Typography>
            <br/>
            <Divider/>
            <br/>
            <Button component={Link} to="/" variant="outlined">Back to Main Menu</Button>
        </div>
    )
}

export default Confirmation
