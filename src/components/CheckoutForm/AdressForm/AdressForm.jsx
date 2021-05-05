import React from 'react'
import {  Button, Grid, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import FormField from './FormField'
import { Link } from 'react-router-dom'

const AdressForm = ({next}) => {
    const {handleSubmit, control} = useForm()
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address </Typography>
            
                <form onSubmit={handleSubmit((data) => next(data) )}>
                    <Grid container spacing={3}>
                        <FormField name='firstName' label='First Name' required='required' control={control} />
                        <FormField name='lastName' label='Last Name' control={control}/>
                        <FormField name='email' label='Email' control={control}/>
                        <FormField name='city' label='City' control={control}/>
                        <FormField name='adress' label='Adress' control={control}/>
                        <FormField name='phoneNumber' label='Phone Number' control={control}/>
                    </Grid>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                         <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                         <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            
        </>
    )
}

export default AdressForm
