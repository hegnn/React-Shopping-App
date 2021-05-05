import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    objectFit: 'contain'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  price:{
    float:"right",
    marginLeft: "200px"
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  title:{
    height: 80,
    objectFit: "contain",
    fontSize: "1vw"
  },
  
}));