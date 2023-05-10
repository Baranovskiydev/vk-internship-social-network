import React from 'react'
import styles from "./post.module.css"

interface PostProps{
    text: String;
    image: String;
    name: String;
    creation_date: Date;
    likes_count: number;
}

const URL = 'http://localhost:7777/';

export default function (props: PostProps) {
  return (
    <div className={styles.post}>
        <h1>{props.name}</h1>
        <p>{props.text}</p>
        {props.image && <img src={`${URL}${props.image}`} alt="Картиночка" />}
    </div>
  )
}
