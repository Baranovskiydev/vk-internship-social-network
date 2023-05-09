import {useState} from 'react'
import Input from '../UI/input/Input'
import styles from "./styles/auth.module.css"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { login } from '../../API/login';



export default function LoginForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");
  const {user} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  const onClickHandler = (): void => {
    dispatch(login(email,password))
  }

  return (
    <div className={styles.authentication}>
        <div className={styles.authentication__header}>Логин</div>
        <label className={styles.lbl}>E-mail</label>
        <Input value={email} setValue={setEmail} type='email' placeholder='Введите e-mail'/>
        <label className={styles.lbl}>Пароль</label>
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите Пароль'/>


        <button className={styles.authentication__btn} onClick={onClickHandler}>
          Продолжить приключение в "соц.сети за 5 дней"
        </button>
    </div>
  )
}
