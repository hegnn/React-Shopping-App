import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '90%',
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      width: '400px',
  }
  },
  
}));