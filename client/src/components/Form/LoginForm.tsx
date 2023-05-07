import {useState} from 'react'
import Input from '../UI/input/Input'
import styles from "./styles/reg.module.css"
import { useAppDispatch } from '../../hooks/hooks';
import { login } from '../../API/login';



export default function LoginForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch()

  const onClickHandler = (): void => {
    dispatch(login(email,password));
  }

  return (
    <div className={styles.registration}>
        <div className={styles.registration__header}>Логин</div>
        <Input value={email} setValue={setEmail} type='email' placeholder='Введите e-mail'/>
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите Пароль'/>


        <button className={styles.registration__btn} onClick={onClickHandler}>
          Продолжить приключение в "соц.сети за 5 дней"
        </button>
    </div>
  )
}
