import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { Controller } from 'react-hook-form'

const FormField = ({name, label, control}) => {

    return (
        <Grid item xs={12} sm={6} >
            <Controller 
                render = {({field}) => 
                <TextField 
                    {...field}        
                    label={label} required
                />}
                name={name}
                control = {control}
                defaultValue=""
            />
        </Grid>
    )
}


export default FormField
