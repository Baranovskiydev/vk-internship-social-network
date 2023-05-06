import React from 'react';
import Header from './header/Header';
import styles from './app.module.css'
import RegForm from './regform/RegForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div className={styles.layout}>
        <Header/>
        <Routes>
          <Route path='registration' element = {<RegForm/>}/>
        </Routes>
      </div>
  );
}

export default App;
