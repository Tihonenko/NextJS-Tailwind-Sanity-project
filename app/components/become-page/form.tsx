import { FC } from 'react';

import { inputs } from './input.data';
import Input from './input/Input';
import ImgInput from './client-img/imgInput';

import styles from './become.module.scss';

const Form:FC = () => {
	return (
		<section className={styles.form_section}>
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
				<ImgInput/>
			</form>
			<div className={styles.div_img}></div>
		</section>
	);
};

export default Form;
