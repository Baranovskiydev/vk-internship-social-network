import React from 'react'
import styles from "./input.module.css"
import { IUser } from '../../../models/IUser';

interface InputProps {
    value?: string | undefined;
    setValue?: any;
    type: string;
    placeholder: string;
    pattern?: string;
    minl?: number;
    maxl?: number;
    accept?: string;
}

export default function Input(props: InputProps) {



  return (
    <input 
    value={props.value}
    onChange={(event: React.FormEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.value)
    }}

    className={styles.input}
    type={props.type} 
    placeholder={props.placeholder} 
    pattern={props.pattern}
    minLength={props.minl}
    maxLength={props.maxl}
    accept={props.accept}
    required
    />
  )
}
