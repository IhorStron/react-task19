import React from 'react';
import { useParams } from 'react-router-dom';
import contactsData from './contactsData';
import styles from './details.module.css';


const avatar = 'https://cdn3.iconfinder.com/data/icons/incognito-avatars/154/incognito-face-user-man-avatar-512.png';


function ContactDetails() {
   const { id } = useParams();


   const contact = contactsData.find((contact) => contact.phone === id);

   if (!contact) {
      return <div>Contact not found</div>;
   }

   return (
      <div>
         <div className={styles.details} >
            <img className={styles.avatar} src={avatar} />
            <p>Name: {contact.firstName} {contact.lastName}</p>
            <p>Phone: {contact.phone}</p>
            {contact.gender && <p>Gender: {contact.gender}</p>}
         </div>
      </div>
   );
}

export default ContactDetails;
