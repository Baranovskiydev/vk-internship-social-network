import React from 'react';
import Header from './header/Header';
import styles from './app.module.css'
import RegForm from './Form/RegForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mypage from '../pages/mypage/Mypage';


function App() {
  return (
      <div className={styles.layout}>
        <Header/>
        <Routes>
          <Route path='/' element={<Mypage/>}/>
          <Route path='registration' element = {<RegForm/>}/>
        </Routes>
      </div>
  );
}

export default App;
