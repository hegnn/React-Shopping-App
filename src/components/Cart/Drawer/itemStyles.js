import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid lightblue',
    paddingBottom: '20px',
  },
  cartImage: {
    maxWidth: '80px',
    objectFit: 'contain',
    marginLeft: '40px',
  },
  cartInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartButton: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  detail: {
    flex:'3'
  }
}));