import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React, {useEffect} from 'react'
import { Link, generatePath, useParams } from "react-router-dom";
import styles from "./header.module.css"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { userSlice } from '../../store/reducers/userSlice';
import { render } from '@testing-library/react';


export default function Header(): ReactJSXElement {

  const {user, isAuth, isLoading} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();



  return (

    <header className={styles.navbar}>
        <Link to="/">
          <div className={styles.navbar__logo}/>
        </Link>

        <div className={styles.navbar__links}>

        {/* No Auth */}
        {!isAuth && !isLoading && <Link to='registration'><div className={styles.btn}>Регистрация</div></Link>}
        {!isAuth && !isLoading && <Link to='login'><div className={styles.btn}>Логин</div></Link>}

        {/* Authed */}
        {isAuth && <Link to=':id'><div className={styles.avatar} ></div></Link>}
        {isAuth && <div className={styles.btn} onClick={() => dispatch(userSlice.actions.logoutUser())}>Выход </div>}
        </div>
    </header>
  )
}
