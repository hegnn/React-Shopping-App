import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Divider} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import {fetchProducts} from '../../service/index'
import { useParams } from 'react-router';

const ProductDetail = ({addToCart}) => {
    const classes = useStyles()
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetch = async () => 
        setItem(await fetchProducts(id))

        fetch()
    },[])
    
    return (
       <div >
           <div className={classes.toolbar} />
           <Card className={classes.root}>
                <CardMedia  className={classes.media} component="img" image={item.image} title={item.title}/>
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.title} variant="h3" > {item.title} </Typography>
                    <Typography className={classes.description} variant="body1" > {item.description} </Typography>
                    <br />
                    <Divider/>
                    <Typography className={classes.price} variant="h4" color="initial"> $ {item.price} </Typography>
                    <Button
                        onClick={() => addToCart(item)}
                        size="large"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<AddShoppingCart/>}
                    >Add to Cart</Button>
                </CardContent>
           </Card>
       </div>
    
    )
}

export default ProductDetail
