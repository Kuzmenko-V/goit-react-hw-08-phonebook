import "./Filter.css";
import { connect } from 'react-redux';
import {filter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';

const styles = {
  form: {
    width: 320,
  }
}
function Filter({ filter, inputChange }) {
  return (
    <TextField
        style={styles.form}
        id="outlined-basic"
        label="Поиск контакта по имени"
        variant="outlined"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={filter}
        onChange={inputChange}/>
    );
};
const mapStateToProps = state => {
   return {filter: getFilter(state)}
};

const mapDispatchToProps = dispatch => {

   return {
     inputChange: (x) => dispatch(filter(x.target.value)),
   };
};    
export default connect(mapStateToProps,mapDispatchToProps)(Filter);
