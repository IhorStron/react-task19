import React from 'react';
import styles from './Contacts.module.css';


function Contact({ contact }) {
  return (
    <div>
      <div className={styles.border}>
      
        <p>Name: {contact.firstName} {contact.lastName}</p>
        <p>Phone: {contact.phone}</p>
        {contact.gender && <p>Gender: {contact.gender}</p>}
        
      </div>
    </div>
  );
}

export default Contact;
