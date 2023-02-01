import { FC } from 'react';
import Image from 'next/image';

import { inputs } from './input.data';
import Input from './input/Input';
import ImgInput from './client-img/imgInput';

import styles from './become.module.scss';

const Form:FC = () => {
	return (
		<section className={styles.form_section}>
			<div className={styles.div_img}>
				<Image src='/images/become.jpg'
				alt='img model'
				width={1000}
				height={2000}
				className={styles.img}
				/>
			</div>
			<form className={styles.form}>
				<fieldset name='requirements' className={styles.requirements}>
					<legend>Требования</legend>
					<div>
						<p>Рост: <span>173-182 </span></p>
						<p>Возраст: <span>13 до 20</span></p>
					</div>
				</fieldset>
				<fieldset name='inputs' className={styles.input_box}>
					{inputs.map((item) => (
						<Input item={item} key={item.name} />
					))}
				</fieldset>
				<fieldset name='imginputs' className={styles.img_inputs}>
					<h2>Фото</h2>
					<ImgInput/>
					<ImgInput/>
					<ImgInput/>
					<ImgInput/>
				</fieldset>
				<fieldset className={styles.check}>
					<input type='checkbox' name='check'></input>
					<label htmlFor='check'>Согласие на обработку персональных данных</label>
				</fieldset>
				
				<button className={styles.submit}>Отправить</button>
			</form>
			
		</section>
	);
};

export default Form;
