import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {useState} from 'react'
import styles from './styles/auth.module.css'
import Input from '../UI/input/Input'
import { IUser } from '../../models/IUser'
import { registration } from '../../API/registration'

function RegForm(): ReactJSXElement {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");

  const onClickHandler = (): void => {
    registration(email,password);
  }

  return (
    <div className={styles.authentication}>
        <div className={styles.authentication__header}>Регистрация</div>
        <label className={styles.lbl}>Введите вашу почту</label>
        <Input value={email} setValue={setEmail} type='email' placeholder='Введите e-mail'/>
        <label className={styles.lbl}>Придумайте пароль длиной от 6 до 12 символов</label>
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите Пароль'/>
        {/* <label className={styles.lbl}>Выберите Аватар</label>
        <Input type='file' placeholder='Введите e-mail' accept='.png,.jpg,.jpeg'/> */}

        <button className={styles.authentication__btn} onClick={onClickHandler}>
          Начать приключение в "соц.сети за 5 дней"
        </button>
    </div>
  )
}

export default RegForm