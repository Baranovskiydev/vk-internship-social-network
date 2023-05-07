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

        <div className={styles.links}>
          
          <button>Login</button>
          <button>Registration</button>  
        </div>
    </header>
  )
}
