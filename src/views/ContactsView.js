import Section from '../Components/Section';
import Form from '../Components/Form';
import Filter from '../Components/Filter';
import ContactList from '../Components/ContactList';
import Container from '@material-ui/core/Container';

export default function ContactsView() {
      return (
          <Container >
              <Section title="Телефонная книга">
                <Form />
              </Section>
              <Section title="Контакты">
                <Filter />
                <ContactList />
          </Section>
        </Container>
            
        )
}





 