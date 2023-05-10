import React, {useEffect, useMemo} from 'react'
import styles from "./page.module.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Input from '../UI/input/Input';
import { IPost } from '../../models/IPost';
import Post from './Post/Post';
import { getSingleUser } from '../../API/getUser';
import { getPosts } from '../../API/getPosts';

function Page() {
    const { id } = useParams();

    
    const URL = 'localhost:7777';
    const {posts} = useAppSelector(state => state.postReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {user} = useAppSelector(state => state.singleUserReducer);
    useEffect(() => {
        console.log(id);
        if (id){
            dispatch(getSingleUser(id));
            dispatch(getPosts(id));
        }else{
            navigate('*')
        }
        
    }, [])
    
    const avatar_link = 'localhost:7777/'+ user.avatar;

    

  return (
    <div className={styles.page}>
        <div className={styles.profile}>
            <div className={styles.profile__avatar} style={{backgroundImage: avatar_link}}>
            </div>
            <div className={styles.profile__info}>{user.name}</div>
            <div className={styles.profile__info}>{user.surname}</div>
            <div className={styles.profile__info}>Возраст: {user.age}</div>
            <div className={styles.block}>
                <Link to='/friendlist' className={styles.btn}>Друзья</Link>
                <Link to='/feed' className={styles.btn}>Лента</Link>
                <Link to='/humans' className={styles.btn}>Люди</Link>
            </div>
        </div>
        <div className={styles.feed}>
            <div className={styles.addinfo}>
                <div>
                    <div>Город:{user.city ?? "город не указан"}</div>
                    <div>Университет:{user.university ?? "Университет не указан"}</div>
                    <div>Кол-во постов:{user.posts?.length}</div>
                </div>
                
                <button className={styles.btn}>
                    Edit info
                </button>
            </div>
            <div className={styles.postCreator}>
                <h1>Создать пост</h1>
                <div className={styles.post__form}>
                    <form action = "http://localhost:7777/api/post/add" method='post' encType='multipart/form-data'>
                    <textarea name='text' maxLength={500} placeholder='Расскажите друзьями что-нибудь о своей жизни...'></textarea>
                        <Input name='postimage' type='file' placeholder='Добавьте картинку' accept='.jpg'/>
                        <button type='submit' className={styles.btn}>Опубликовать</button>
                    </form>
                </div>
            </div>
            <div className={styles.postCreator}>
                <h1>Мои посты</h1>
                {posts.map((elem: IPost) => {
                    return <Post 
                    text={elem.text} 
                    image={elem.image} 
                    name={elem.username} 
                    creation_date={elem.createdAt}
                    likes_count={elem.likes}
                    />
                })}
            </div>
        </div>
    </div>
  )
}

export default Page