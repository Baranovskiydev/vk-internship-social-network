import React from 'react'
import styles from "./page.module.css"
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks';

function Page() {
    const { id } = useParams();
    const {user} = useAppSelector(state => state.userReducer)
    const avatar_link = 'localhost:7777/'+ user.avatar;

    console.log(avatar_link);

  return (
    <div className={styles.page}>
        <div className={styles.profile}>
            <div style={{
                backgroundImage: `url(${avatar_link})`
        }} className={styles.profile__avatar}>
            </div>
            <div className={styles.profile__info}>{user.name}</div>
            <div className={styles.profile__info}>{user.surname}</div>
            <div className={styles.profile__info}>Возраст: {user.age}</div>

        </div>
        <div className={styles.addinfo}>
            <div>
                <div>Город:{user.city ?? "город не указан"}</div>
                <div>Университет:{user.university ?? "Университет не указан"}</div>
                <div>Кол-во постов:{user.posts.length}</div>
            </div>
            <button>
                Edit info
            </button>
        </div>

    </div>
  )
}

export default Page