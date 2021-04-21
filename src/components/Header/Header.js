/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Button, PopoverHeader, PopoverBody, UncontrolledPopover, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from 'react-hamburger-menu';
import Login from '../Login/Login';
import { dictionaryList } from '../../languages/index';
import { LanguageContext } from '../../context/LanguageContext';
import Home from '../Home/Home';
import styles from './Header.module.scss';
import Contact from '../Contact/Contact';

function Header(props) {
  /*   const [popoverOpen, setPopoverOpen] = useState(false); */
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { language, changeLanguage } = useContext(LanguageContext);
  const [username, setUsername] = useState('');
  const { Homepage, loginHeader, contactHeader } = dictionaryList[language];
  const logout = () => {
    setUsername('');
  };
  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      document.getElementById('denememe').style.display = 'block';
    } else {
      document.getElementById('denememe').style.display = 'none';
    }
  };

  return (
    <>
      <Router>
        <Navbar color="light" light className={styles.myNav}>
          <h1>{props.page}</h1>

          <NavbarBrand href="/" className={styles.mrAuto} navbar>
            <FontAwesomeIcon icon={faCoffee} />
          </NavbarBrand>

          <div className={styles.burger} id="deneme">
            <Nav className={styles.nav}>
              <NavItem>
                <Link to="/">{Homepage}</Link>
              </NavItem>
              {!username && (
                <>
                  <NavItem>
                    <Link to="/login">{loginHeader}</Link>
                  </NavItem>
                </>
              )}

              <NavItem>
                <Link to="/contact">{contactHeader}</Link>
              </NavItem>
              {username && (
                <>
                  <li className="nav-item">
                    <Button id="PopoverLegacy" type="button">
                      {username}
                    </Button>
                    <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                      <PopoverHeader>{username}</PopoverHeader>
                      <PopoverBody>{email}</PopoverBody>
                      <Link to="/" onClick={logout}>
                        Logout
                      </Link>
                    </UncontrolledPopover>
                  </li>
                </>
              )}
            </Nav>
          </div>

          <div className={styles.openBurger} id="denememe">
            <Nav className={styles.mobileNav}>
              <NavItem>
                <Link to="/">{Homepage}</Link>
              </NavItem>
              {!username && (
                <>
                  <NavItem>
                    <Link to="/login" onClick={handleClick}>
                      {loginHeader}
                    </Link>
                  </NavItem>
                </>
              )}

              {username && (
                <>
                  <div>
                    <Button id="PopoverLegacy" type="button">
                      {username}
                    </Button>
                    <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                      <PopoverHeader>{username}</PopoverHeader>
                      <PopoverBody>{email}</PopoverBody>
                      <Link to="/" onClick={logout}>
                        Logout
                      </Link>
                    </UncontrolledPopover>
                  </div>
                </>
              )}

              <NavItem>
                <Link to="/contact" onClick={handleClick}>
                  {contactHeader}
                </Link>
              </NavItem>
            </Nav>
          </div>
          <Nav>
            <NavItem>
              <select id="cars" onClick={changeLanguage}>
                <option value="en" selected>
                  EN
                </option>
                <option value="tr">TR</option>
              </select>
            </NavItem>
          </Nav>
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleClick}
            width={30}
            height={30}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
            className={styles.hamburger}
          />
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home page="Homepage" />
          </Route>
          <Route path="/login">
            <Login username={username} onChange={setUsername} email={email} onChangeMail={setEmail} />
          </Route>
          <Route path="/contact">
            <Contact name={username} email={email} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Header;
