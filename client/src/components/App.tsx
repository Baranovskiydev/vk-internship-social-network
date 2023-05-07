import React from 'react';
import Header from './header/Header';
import styles from './app.module.css'
import RegForm from './Form/RegForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm from './Form/LoginForm';


function App() {
  return (
      <div className={styles.layout}>
        <Header/>
        <Routes>
          <Route path='login' element={<LoginForm/>}/>
          <Route path='registration' element = {<RegForm/>}/>
        </Routes>
      </div>
  );
}

export default App;
