import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Button } from 'reactstrap';
import styles from './Contact.module.scss';
import { dictionaryList } from '../../languages/index';
import { LanguageContext } from '../../context/LanguageContext';

function Contact(props) {
  const [email, setEmail] = useState(props.email);
  const { language } = useContext(LanguageContext);
  const {
    countryList,
    contactHeader,
    contactName,
    contactMail,
    contactTel,
    contactCountry,
    contactTextArea,
    contactSendButton,
  } = dictionaryList[language];
  const [result, setResult] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formJSON = Object.fromEntries(data.entries());
    setResult(JSON.stringify(formJSON, null, 2));
  };
  return (
    <div className={styles.contactMain}>
      <h1>{contactHeader}</h1>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="name">{contactName}</label>
        <input type="text" name="name" id="name" defaultValue={props.name} required placeholder="John Smith" />
        <label htmlFor="email">{contactMail}</label>
        <input
          type="text"
          name="email"
          id="email"
          pattern=".+@gmail\.com|.+@microsoft\.com"
          title="example@gmail.com || example@microsoft.com"
          className={styles.emailInput}
          required
          placeholder="example@gmail.com"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{contactTel}</label>
        <input type="tel" pattern="[0-9]{10}" title="Format +90xxx xxx xx xx" id="tel" name="tel" placeholder="5553332211" />
        <label htmlFor="">{contactCountry}</label>
        <Select options={countryList} id="country" name="country" className={styles.select2} />
        <label htmlFor="">{contactTextArea}</label>
        <textarea cols="30" rows="5" id="text" name="text" />
        <Button type="submit">{contactSendButton}</Button>
        {result && (
          <div className="results">
            <h2>Form Data</h2>
            <pre>{result}</pre>
          </div>
        )}
      </form>
    </div>
  );
}
Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};
export default Contact;
