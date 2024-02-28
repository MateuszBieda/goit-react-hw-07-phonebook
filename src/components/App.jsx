import './styles.css';
import { Form } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div className="App">
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
};
