import React from 'react'
import styles from './usercard.module.css'

interface CardProps{
    fullname: String;
    avatar: String;
    id?: string;
    age: number | undefined;
}

export default function Usercard(props: CardProps) {

    const avatar_link = 'http://localhost:7777/'+props.avatar;
    const info = props.fullname + "   " + "Возраст:  " + props.age;

    const onClickHandler = () =>{

    }

  return (
    <div className={styles.card}> 
        <img src={avatar_link} alt="аватарки тута нет" />
        <h1>{info}</h1>
        <button className={styles.btn} onClick={() => {onClickHandler()}}>
            Добавить в друзья
        </button>
    </div>
  )
}
