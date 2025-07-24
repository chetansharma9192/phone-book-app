import React, { useEffect, useState } from 'react';
import { getContacts, addContact, updateContact, deleteContact } from './service/contactService';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleSave = async (contact) => {
    if (contact._id) {
      await updateContact(contact._id, contact);
    } else {
      await addContact(contact);
    }
    setSelected(null);
    loadContacts();
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    loadContacts();
  };

  const handleEdit = (contact) => {
    setSelected(contact);
  };

  return (
    <div>
      <h1>📞 Phone Book</h1>
      <ContactForm onSave={handleSave} selected={selected} />
      <ContactList contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
