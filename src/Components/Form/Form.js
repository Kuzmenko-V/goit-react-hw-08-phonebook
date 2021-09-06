import  { useState } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContactsItems } from '../../redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


const styles = {
  form: {
    width: 380,
  }
}
// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

function Form({contacts, addContacts }) {
  const [name, setName] = useState('');
  const [number, setNomber] = useState('');
  // const classes = useStyles();
  const inputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': setName(value); break;
      case 'number': setNomber(value); break;
      default: return;
    }
  };
  const formSabmit = e => {
    e.preventDefault();
    if (contacts.filter(e => e.name === name).length === 0) {
      addContacts({ name, number });
    }
    else {
      alert(`${name} уже существует в контактах!`);
    }
    setNomber('');
    setName('');
  }
  return (
    <form className="form" onSubmit={formSabmit}>
      <TextField
        style={styles.form}
        id="outlined-basic"
        label="Имя"
        variant="outlined"
        type="text"
         name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={inputChange}/>
      <TextField
        style={styles.form}
        id="outlined-basic"
        label="Номер телефона"
        variant="outlined"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={inputChange} />
      {/* <Button variant="contained" size="medium" color="primary" className={classes.margin} type="button" title="submit">
        
      </Button> */}
      <button type="submit">Добавить контакт</button>
    </form>
        );
};

const mapStateToProps = state => {
   return {contacts: getContactsItems(state)};
};
const mapDispatchToProps = dispatch => {

   return {
     addContacts: x => dispatch(addContact(x))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Form);