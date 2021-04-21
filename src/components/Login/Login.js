/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import styles from './Login.module.scss';
import useVisible from './UseVisible';
import { dictionaryList } from '../../languages/index';
import { LanguageContext } from '../../context/LanguageContext';

function Login(props) {
  const { language } = useContext(LanguageContext);
  const { loginHeader, loginName, loginMail, loginPass, loginButton } = dictionaryList[language];
  const [username, setUsername] = useState('');
  const history = useHistory();
  const [email, setEmail] = useState('');
  /*   const myChangeHandler = () => {
    console.log('');
  }; */
  const { ref, isVisible, setIsVisible } = useVisible(true);
  const handleSubmit = (re) => {
    re.preventDefault();
    history.push('/');
    props.onChange(re.target.username.value);
    props.onChangeMail(re.target.email.value);
    setUsername(re.target.username.value);
    setEmail(re.target.email.value);
  };
  const isLoggedIn = () => {
    if (username && email) {
      history.push('/');
    }
  };
  const handleSpan = () => {
    setIsVisible(false);
    history.push('/');
  };
  useEffect(() => {
    isLoggedIn();
    setIsVisible(true);
    if (!isVisible) {
      history.push('/');
    }
  }, [isVisible]);
  return (
    <div className={styles.loginMain}>
      {!isVisible && (
        <Button className={styles.aaa} onClick={() => setIsVisible(!isVisible)}>
          Open Login Form
        </Button>
      )}

      {isVisible && (
        <div id="myModal" className={styles.modal} ref={ref}>
          <div className={styles.modalContent}>
            <span onClick={handleSpan} className={styles.close} aria-hidden="true">
              &times;
            </span>
            <h3>{loginHeader}</h3>
            <form onSubmit={handleSubmit} className={styles.formItems}>
              <input type="text" required id="username" name="username" placeholder={loginName} />

              <input type="email" id="email" name="email" autoComplete={0} required placeholder={loginMail} />

              <input type="password" name="password" id="password" required placeholder={loginPass} />

              <Button type="submit">{loginButton}</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
Login.propTypes = {
  onChange: PropTypes.func,
};
export default Login;
