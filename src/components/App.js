import React, { createContext } from 'react'
import '../styles/App.css';
import { LanguageSettings } from './LanguageSetting';

const data = window.localStorage.getItem(window.localStorage.getItem('key'))
export const LanguageContext = createContext()

const App = () => {

  return (
    <LanguageContext.Provider value={{language:data}}>
      <div id="main" >
        <LanguageSettings />
      </div>
    </LanguageContext.Provider>

  )
}


export default App;
