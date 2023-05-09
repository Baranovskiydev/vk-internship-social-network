import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import styles from "./header.module.css"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { userSlice } from '../../store/reducers/userSlice';
import { render } from '@testing-library/react';


export default function Header(): ReactJSXElement {

  const {user, isAuth} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  return (

    <header className={styles.navbar}>
        <Link to="/">
          <div className={styles.navbar__logo}/>
        </Link>

        <div className={styles.navbar__links}>

        {/* No Auth */}
        {!isAuth && <Link to='registration'><div className={styles.btn}>Регистрация</div></Link>}
        {!isAuth && <Link to='login'><div className={styles.btn}>Логин</div></Link>}

        {/* Authed */}
        {isAuth && <div className={styles.avatar} ></div>}
        {isAuth && <div className={styles.btn} onClick={() => dispatch(userSlice.actions.logoutUser())}>Выход </div>}
        </div>
    </header>
  )
}
