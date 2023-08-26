import React, { useState } from 'react';
import styles from './Contacts.module.css';
import Contact from './Contacts';
import contactsData from './contactsData';
import { Link } from 'react-router-dom';

function Contacts() {
  const [search, setSearch] = useState('');
  const [genderFilters, setGenderFilters] = useState({ male: true, female: true });


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (gender) => {
    setGenderFilters((prevFilters) => ({
      ...prevFilters,
      [gender]: !prevFilters[gender],
    }));
  };

  const filteredContacts = contactsData.filter((contact) => {
    const nameMatch =
      contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(search.toLowerCase());

    const genderMatch = genderFilters[contact.gender];

    return nameMatch && genderMatch;
  });

  return (
    <div className={styles.contacts} >
      <div>
        <div className={styles.card}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <label>
          <input
            className={styles.check}
            type="checkbox"
            checked={genderFilters.male}
            onChange={() => handleFilterChange('male')}
          />{' '}
          Male
        </label>
        <label>
          <input
            className={styles.check}
            type="checkbox"
            checked={genderFilters.female}
            onChange={() => handleFilterChange('female')}
          />{' '}
          Female
        </label>
      </div>
      <div>
        {filteredContacts.map((contact, index) => (
          <div key={index}>
            <Link to={`/contacts/${contact.phone}`}>
              <Contact contact={contact} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;





