import React, { useEffect } from 'react';
import Header from './header/Header';
import styles from './app.module.css'
import RegForm from './Form/RegForm';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { auth } from '../API/auth';

import LoginForm from './Form/LoginForm';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import Dialogues from './dialogues/Dialogues';
import Page from './Page/Page';
import Error404 from './NotFound/Error404';


function App() {

  const {user, isAuth, isLoading} = useAppSelector(state => state.userReducer);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(auth());
  },[])

  useEffect(() => {
    if(isAuth){
      navigate(`/${user._id}`)
    }
  },[isAuth])

  


  return (
      <div className={styles.layout}>

        <Header/>
        {
          isAuth && !isLoading &&
          <Routes>
            <Route path=':id' element={<Page/>}/>
            <Route path='friendlist'/>
            <Route path='dialogues' element={<Dialogues/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        }
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
