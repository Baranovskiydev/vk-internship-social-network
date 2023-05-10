import React, {useEffect, useRef} from 'react'
import styles from './humans.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import Usercard from '../UI/usercard/Usercard';
import { getAllUsers } from '../../API/getAllUsers';

export default function Humans() {

    const last_elem = useRef<HTMLDivElement | null >(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.otherUsersReducer);

    useEffect(()=>{
        dispatch(getAllUsers());
    },[])
    
    // useEffect(() => {
    //     const callback = function(entries, observer){
            
    //     };
    //     observer.current = new IntersectionObserver(callback);
    //     observer.current.observe(last_elem.current)
    // },[])

  return (
    <div className={styles.page}>
        <h1 className={styles.page__heading}>Поиск по пользователям есть на беке, но тута закончился, я не успеваю</h1>
        <h1 className={styles.page__heading}>Люди карочи</h1>
        {users.map((user) => {
            return <Usercard 
            key={user._id}
            fullname={user.name+' '+user.surname}
            avatar={user.avatar}
            age={user.age}
            id = {user._id}
            labelbtn={'Добавить в друзья'}
            />
        })}
        <div ref={last_elem} style={{height: "20px", fontSize:"2em"}}>useobserver тоже не успеваю, но я умею{":("}</div>
    </div>
  )
}
