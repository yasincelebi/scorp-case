import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState('en');
  const changeLanguage = (e) => setLanguage(e.target.value);
  // eslint-disable-next-line react/prop-types
  return <LanguageContext.Provider value={{ language, changeLanguage }}>{props.children}</LanguageContext.Provider>;
}
