import React from 'react'

interface InputProps {
    type: string,
    placeholder: string
}

export default function Input(props: InputProps) {
  return (
    <input type={props.type} placeholder={props.placeholder} />
  )
}
