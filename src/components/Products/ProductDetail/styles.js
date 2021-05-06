import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default makeStyles((theme) => (
    {
    toolbar: theme.mixins.toolbar,
    root: {
        margin: '5vw 10vw 0 10vw',
        maxWidth: '100%',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    media: {
        height:'500px',
        objectFit: 'contain',
        maxWidth: '370px',
    },
    cardContent: {
        margin: '4%',
    },
    title:{
        marginBottom: '50px'
    },
    price:{
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        fontWeight: 'bolder',
    },
    button:{
        width: '200px',
        marginTop: '150px'
    }
}));