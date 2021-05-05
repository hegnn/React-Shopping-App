import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        margin: '20px 350px 0 350px',
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    media: {
        margin: '50px',
        height:'500px',
        width:'auto',
        objectFit: 'scale-down',
        maxWidth: '370px'
    },
    cardContent: {
        margin: '50px'
    },
    title:{
        marginBottom: '50px'
    },
    description: {
        
    },
    price:{
        paddingTop: '20px',
        float: 'right',
        fontWeight: 'bolder',
    },
    button:{
        width: '200px',
        marginTop: '150px'
    }
}));