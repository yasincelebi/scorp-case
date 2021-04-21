/* eslint-disable no-console */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
