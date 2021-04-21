import React, { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import styles from './Footer.module.scss';
import { dictionaryList } from '../../languages/index';
import { LanguageContext } from '../../context/LanguageContext';

function Footer() {
  const { language } = useContext(LanguageContext);
  const { footerMain } = dictionaryList[language];
  return (
    <footer className={styles.footer}>
      <Row>
        <Col className={styles.col}>
          <h6>{footerMain[0].leftContent}</h6>
        </Col>
        <Col className={styles.col}>
          <h6>{footerMain[1].secondContent}</h6>
        </Col>
        <Col className={styles.col}>
          <h6>{footerMain[2].thirdContent}</h6>
        </Col>
        <Col className={styles.col}>
          <h6>{footerMain[3].rightContent}</h6>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
