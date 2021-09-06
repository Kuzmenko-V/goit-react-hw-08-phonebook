import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};
// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container >
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          style={styles.label}
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <TextField
          style={styles.label}
          id="outlined-basic"
          label="Почта"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <TextField
          style={styles.label}
          id="outlined-basic"
          label="Пароль"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="on"
          required
        />
        
        <button type="submit">Зарегистрироваться</button>
      </form>
    </Container>
  );
}
