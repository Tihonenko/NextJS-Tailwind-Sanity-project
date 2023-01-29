import { FC } from 'react';
import styles from '../become.module.scss'
import { IInputType } from './input.interface'

interface IInput{
    input:IInputType;
}

const Input:FC<IInput> = ({input}) => {
  return (
    <div className={styles.input}>
        <input type='text' name={input.name}/>
        <label>{input.text}</label>
    </div>
  )
}

export default Input