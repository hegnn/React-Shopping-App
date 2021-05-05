import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles';
import { Link, useHistory, generatePath } from 'react-router-dom'

const Product = ({ product, funcAddToCart }) => {
    const classes = useStyles()
    const history = useHistory()
    const id = product.id
    const handleProceed = (e) => {
         history.push(generatePath("/products/:id", { id }));
      };

    return (
        
        <div>
            <Card className={classes.root}>
                <Link onClick={() => handleProceed()} to={`/prod/${product.id}`}>
                    <CardMedia component="img" className={classes.media} image={product.image} title={product.title} />
                </Link>
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography noWrap={true} variant="h5" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            $ {product.price}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => funcAddToCart(product)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
