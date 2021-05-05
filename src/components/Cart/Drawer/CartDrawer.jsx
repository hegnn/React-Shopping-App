import React from 'react'
import CartItem from './CartItem'
import useStyles from './drawerStyles'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const CartDrawer = ({ cartItems, addToCart, removeFromCart}) => {
    const classes = useStyles()

    const DisabledButtons = () => (
        <div>
            <Button disabled={true} component={Link} to="/cart" variant="contained" color="primary" style={{ width: '150px'}}>
                Cart
            </Button>
            <Button disabled={true} component={Link} to="/checkout" variant="contained" color="secondary" style={{float: 'right', width: '150px'}} >
                Checkout
            </Button>
        </div>
    )

    const Buttons = () => (
        <div>
            <Button component={Link} to="/cart" variant="contained" color="primary" style={{ width: '150px'}}>
                Cart
            </Button>
            <Button component={Link} to="/checkout" variant="contained" color="secondary" style={{float: 'right', width: '150px'}} >
                Checkout
            </Button>
        </div>
    )

    return (
        <div className={classes.root}>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in the cart</p> : null}
            {cartItems.map((item) => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${cartItems.reduce((total, item) => {return total + item.amount * item.price}  , 0)} </h2>
            { cartItems.length !== 0 ? <Buttons/> : <DisabledButtons/> }
            
        </div>
    )
}

export default CartDrawer
