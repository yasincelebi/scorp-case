/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { dictionaryList } from '../../languages/index';
import { LanguageContext } from '../../context/LanguageContext';
import styles from './Home.module.scss';

function Home() {
  const { language } = useContext(LanguageContext);
  const { homeTitle, content } = dictionaryList[language];
  return (
    <div className={styles.home}>
      <h1 className="align-center">{homeTitle}</h1>

      <div className={styles.mainDiv}>{content[0].mainContent}</div>
      <div className={styles.mainDiv}>{content[1].secondContent}</div>
      <div className={styles.mainDiv}>{content[2].thirdContent}</div>
    </div>
  );
}

export default Home;
