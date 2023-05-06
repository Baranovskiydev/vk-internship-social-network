import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import styles from './reg.module.css'

function RegForm(): ReactJSXElement {
  return (
    <div className={styles.registration}>
        <div className={styles.registration__header}>Регистрация</div>
    </div>
  )
}

export default RegForm