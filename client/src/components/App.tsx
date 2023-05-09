import React, { useEffect } from 'react';
import Header from './header/Header';
import styles from './app.module.css'
import RegForm from './Form/RegForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from '../API/auth';

import LoginForm from './Form/LoginForm';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';


function App() {

  const {isAuth, isLoading} = useAppSelector(state => state.userReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(auth());
  },[])


  return (
      <div className={styles.layout}>

        <Header/>
        {!isAuth && !isLoading && 
                  <Routes>
                  <Route path='login' element={<LoginForm/>}/>
                  <Route path='registration' element = {<RegForm/>}/>
                </Routes>
        }


      </div>
  );
}

export default App;
