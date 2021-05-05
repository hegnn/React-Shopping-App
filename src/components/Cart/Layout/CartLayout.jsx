import React from 'react'
import { Container, Button, Grid, Typography } from '@material-ui/core'
import useStyles from './layoutStyles'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartLayout = ({cartItems, addToCart, removeFromCart, deleteFromCart, deleteAllCart}) => {
    const classes = useStyles()

    const EmptyCart = () => (
        <div>

        <Typography variant="subtitle1" >No items in the cart</Typography>
        <Button component={Link} to="/" className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
                        Empty
                    </Button>
        </div>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cartItems.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem 
                                item={item}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                deleteFromCart= {deleteFromCart}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant="h4">
                    Subtotal: ${cartItems.reduce((total, item) => {return total + item.amount * item.price}  , 0)} 
                </Typography>
                <div>
                    <Button className={classes.emptyButton} onClick={() => deleteAllCart()} size="large" type="button" variant="contained" color="secondary">
                        Empty
                    </Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    )


    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography variant="h3" className={classes.title} gutterBottom> Your Shopping Cart </Typography>
            {cartItems.length === 0 ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default CartLayout
