import React, {useEffect, useRef} from 'react'
import styles from './humans.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import Usercard from '../UI/usercard/Usercard';

export default function Humans() {

    const last_elem = useRef<HTMLDivElement | null >(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.otherUsersReducer);

    // useEffect(() => {
    //     const callback = function(entries, observer){
            
    //     };
    //     observer.current = new IntersectionObserver(callback);
    //     observer.current.observe(last_elem.current)
    // },[])

  return (
    <div className={styles.page}>
        <h1>Люди карочи</h1>
        {users.map((user) => {
            return <Usercard 
            fullname={user.name+' '+user.surname}
            avatar={user.avatar}
            age={user.age}
            id = {user._id}
            />
        })}
        <div ref={last_elem} style={{height: "20px"}}/>
    </div>
  )
}
