import { useEffect} from 'react';
import './ContactList.css';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/contacts-operations';
import { getContactsFiltred } from '../../redux/contacts/contacts-selectors';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ContactList({ contactsFiltred, onDeleteContact, fetchContacts }) {
   const classes = useStyles();
   useEffect(() => {
      fetchContacts()
  }, [fetchContacts]);
   return (
   <ul className="ContactList">
      {contactsFiltred.map(contact =>
         <li key={contact.id} >
            <p>{contact.name}: {contact.number}</p>
            <Button variant="contained" size="small" color="primary" className={classes.margin} type="button" onClick={()=>onDeleteContact(contact.id)}>
              Удалить
            </Button>
         </li>
      )}
   </ul> 
);
}

const mapStateToProps = state => {
   return {contactsFiltred: getContactsFiltred(state)};
};

const mapDispatchToProps = dispatch => {

   return {
      onDeleteContact: (id) => dispatch(deleteContact(id)),
      fetchContacts: ()  => dispatch(fetchContacts()),
   };
};
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);