import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} />
        );
    });

    return (<div className="ui celled list">
    {renderContactList}
            <h2>Contact List</h2>
        </div>
    );
};

export default ContactList;