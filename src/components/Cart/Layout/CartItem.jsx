import React from 'react'

import { Card, CardContent, Button, CardMedia, Typography, CardActions } from '@material-ui/core'

import useStyles from './itemStyles'

const CartItem = ({item, addToCart, removeFromCart, deleteFromCart}) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardMedia component="img" image={item.image} alt={item.title} className={classes.media} />
            <CardContent>
                <Typography className={classes.title} variant="h4"> {item.title} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => removeFromCart(item.id)}>-</Button>
                    <Typography> {item.amount} </Typography>
                    <Button type="button" size="small" onClick={() => addToCart(item)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => deleteFromCart(item.id)} >Remove</Button>
                <Typography className={classes.price} variant="h5"> ${item.price * item.amount} </Typography>
            </CardActions>
        </Card>
    )
}

export default CartItem
