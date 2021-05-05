import React from 'react'
import { Button } from '@material-ui/core'
import useStyles from './itemStyles'

const CartItem = ({item, addToCart, removeFromCart}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div>
                <h3> {item.title} </h3>
                <div className={classes.cartInfo}>
                    <p>Price: ${item.price} </p>
                    <p>Total: ${item.price * item.amount} </p>
                </div>
                <div className={classes.cartButton}>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => removeFromCart(item.id)}
                    > 
                        -
                    </Button>
                    <p> {item.amount} </p>
                    <Button 
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => addToCart(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} className={classes.cartImage}></img>
        </div>
    )
}

export default CartItem
