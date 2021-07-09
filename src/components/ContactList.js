import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    const contacts = [
        {
            id: "1",
            "name": "Dipesh",
            "email": "dipesh@mail.com"
        },
    ];

    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard 
            contact={contact} 
            clickHandler = {deleteContactHandler}
            key={contact.id}
            />
        );
    });

    return (<div className="main" style={{paddingTop: 20}}>
    <h2 style={{paddingTop: 40}}>Contact List
        <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
        </Link>
    </h2>
    <div className="ui celled list">{renderContactList}</div>
    </div>
    );
};

export default ContactList;