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
import Friendlist from './friendlist/Friendlist';
import Humans from './humans/Humans';
import Feed from './feed/Feed';


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
            <Route path='friendlist' element = {<Friendlist/>}/>
            <Route path='humans' element = {<Humans/>}/>
            <Route path='feed' element = {<Feed/>}/>
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
