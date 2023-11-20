import { ContactForm } from 'components/contactForm/contactForm';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './filter/filter';
import { ContactList } from './contacklist/contactList';

const KeyLocalContact = 'contacts';

export const Phonebooks = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem(KeyLocalContact);
    if (savedContact !== null) {
      return JSON.parse(savedContact);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KeyLocalContact, JSON.stringify(contacts));
  }, [contacts]);

  const filterByName = newTopic => {
    setContacts(prevCont => prevCont);
    setFilter(newTopic);
  };

  const deleteContact = nameId => {
    setContacts(prevCont => prevCont.filter(item => item.id !== nameId));
  };

  const addContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert('This contact is in your phone book');
    } else {
      const contact = { ...newContact, id: nanoid() };
      setContacts(prevCont => [...prevCont, contact]);
    }
  };

  const visibleName = contacts.filter(item => {
    const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filters={filter} onUpdateFilter={filterByName} />

      {contacts.length > 0 && (
        <ContactList names={visibleName} onDelete={deleteContact} />
      )}
    </div>
  );
};
