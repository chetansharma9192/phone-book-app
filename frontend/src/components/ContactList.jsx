import React from 'react';

const ContactList = ({ contacts, onDelete, onEdit }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact._id}>
                    {contact.name} - {contact.phone}
                    <button onClick={() => onEdit(contact)}>Edit</button>
                    <button onClick={() => onDelete(contact._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
