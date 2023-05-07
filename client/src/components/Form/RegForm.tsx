import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {useState} from 'react'
import styles from './reg.module.css'
import Input from '../UI/input/Input'
import { IUser } from '../../models/IUser'

function RegForm(): ReactJSXElement {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.registration}>
        <div className={styles.registration__header}>Регистрация</div>
        <Input value={email}  type='email' placeholder='Введите e-mail'/>
        <Input value={password}  type='password' placeholder='Введите Пароль'/>


        <button className={styles.registration__btn}>
          Начать приключение в "соц.сети за 5 дней"
        </button>
    </div>
  )
}

export default RegForm