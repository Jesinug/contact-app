import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {

    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar img" src={user} alt="user" style={{width:"40px"}}/>
                <div className="content" style={{display:'flex', flexFlow: 'column', justifyContent: 'space-around'}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
        </div>
            <i 
            className="trash alternate outline icon"
            style={{color:"red", marginTop:"7px", padding: 20}} 
            onClick={() => props.clickHandler(id)}>

            </i>
        </div>
    )
};

export default ContactCard;