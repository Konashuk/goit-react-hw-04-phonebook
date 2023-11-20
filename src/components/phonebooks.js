import { ContactForm } from 'components/contactForm/contactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './filter/filter';
import { ContactList } from './contacklist/contactList';

const KeyLocalContact = '';

class Phonebooks extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        KeyLocalContact,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  componentDidMount() {
    const savedContact = localStorage.getItem(KeyLocalContact);
    if (savedContact !== null) {
      this.setState({
        contacts: JSON.parse(savedContact),
      });
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === newContact.name)) {
      alert('This contact is in your phone book');
    } else {
      const contact = { ...newContact, id: nanoid() };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
          name: '',
          number: '',
        };
      });
    }
  };

  filterByName = newTopic => {
    // function  for the test
    // const forTest = [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ];

    // this.setState({
    //   contacts: forTest,
    //   filter: newTopic,
    // });

    // real function, that works with inputed data
    this.setState(prevState => {
      return { contacts: prevState.contacts, filter: newTopic };
    });
  };

  deleteContact = nameId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== nameId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleName = contacts.filter(item => {
      const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
      return hasName;
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filters={filter} onUpdateFilter={this.filterByName} />

        {contacts.length > 0 && (
          <ContactList names={visibleName} onDelete={this.deleteContact} />
        )}
      </div>
    );
  }
}

export default Phonebooks;
