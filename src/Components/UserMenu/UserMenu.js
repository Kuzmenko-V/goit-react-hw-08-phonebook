import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../Navigation/Navigation.css';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);
  const classes = useStyles();


  return (
    <div >
      <span className='navLink'>Добро пожаловать, {email}</span>
      <Button variant="contained" size="medium" color="primary" className={classes.margin} type="button" onClick={() => dispatch(authOperations.logOut())}>
          Выйти
        </Button>
    </div>
  );
}
