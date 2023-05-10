import React from 'react'
import styles from "./page.module.css"
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks';
import Input from '../UI/input/Input';

function Page() {
    const { id } = useParams();
    const {user} = useAppSelector(state => state.userReducer)
    const avatar_link = 'localhost:7777/'+ user.avatar;
    const URL = '';
    const URL_CREATE_POST = URL + '/api/post/create'

    console.log(avatar_link);

  return (
    <div className={styles.page}>
        <div className={styles.profile}>
            <div className={styles.profile__avatar} style={{backgroundImage: avatar_link}}>
            </div>
            <div className={styles.profile__info}>{user.name}</div>
            <div className={styles.profile__info}>{user.surname}</div>
            <div className={styles.profile__info}>Возраст: {user.age}</div>
            <div className={styles.block}>
                <button className={styles.btn} >Друзья</button>
                <button className={styles.btn} >Лента</button>
                <button className={styles.btn} >Диалоги</button>
            </div>
        </div>
        <div className={styles.feed}>
            <div className={styles.addinfo}>
                <div>
                    <div>Город:{user.city ?? "город не указан"}</div>
                    <div>Университет:{user.university ?? "Университет не указан"}</div>
                    <div>Кол-во постов:{user.posts.length}</div>
                </div>
                
                <button className={styles.btn}>
                    Edit info
                </button>
            </div>
            <div className={styles.postCreator}>
                <h1>Создать пост</h1>
                <textarea maxLength={500} placeholder='Расскажите друзьями что-нибудь о своей жизни...'></textarea>
                <div className={styles.post__btns}>
                    <form action = {URL_CREATE_POST} method='post' encType='multipart/form-data'>
                        <Input type='file' placeholder='Добавьте картинку' accept='.jpg'/>
                        <button type='submit' className={styles.btn}>Опубликовать</button>
                    </form>
                </div>
            </div>
            <div className={styles.postCreator}>
                <h1>Мои посты</h1>
            </div>
        </div>
    </div>
  )
}

export default Page