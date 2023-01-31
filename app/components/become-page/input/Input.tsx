import { FC } from 'react';

import styles from '../become.module.scss';

import { IInputType } from './input.interface';

interface IInputProps {
	item: IInputType;
}

const Input: FC<IInputProps> = ({ item }) => {
	return (
		<div className={styles.input}>
			<input type='text' name={item.name}/>
			<label >{item.text}</label>
		</div>
	);
};

export default Input;
