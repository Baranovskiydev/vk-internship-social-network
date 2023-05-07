import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import { Link } from "react-router-dom";
import styles from "./header.module.css"


export default function Header(): ReactJSXElement {
  return (
    <header className={styles.navbar}>
        <Link to="/">
          <div className={styles.navbar__logo}/>
        </Link>

        <div className={styles.navbar__links}>
        <Link to='registration'><div className={styles.btn}>Регистрация</div></Link>
        <Link to='login'><div className={styles.btn}>Логин</div></Link>
        </div>
    </header>
  )
}
