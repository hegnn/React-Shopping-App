import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'


const Review = ({ cartItems  }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom> Order Summary </Typography>
            <List disablePadding>
                {cartItems.map((item) => (
                    <ListItem style={{ padding: '10px 0'}} key={item.title} >
                        <ListItemText primary={item.title} secondary={`Quantity: ${item.amount} `} />
                        <Typography variant="body2" > {item.amount * item.price} </Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0'}} >
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{ fontWeight: 700}}> 
                        ${cartItems.reduce((total, item) => {return total + item.amount * item.price}  , 0)} 
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
