import styles from './become.module.scss';
import { Inputs, inputs } from './input.data';
import Input from './input/Input';

const Form = () => {
	return (
		<section className={styles.form_section}>
			<form className={styles.form}>
				<fieldset name='requirements'>
					<legend>Требования</legend>
					<div>
						<p>Рост: 173-182 </p>
						<p>Возраст: 13 до 20</p>
					</div>
				</fieldset>
				<fieldset name='inputs'>
					{inputs.map((item) => (
						<Input item={item} key={item.name} />
					))}
				</fieldset>
			</form>
			<div className={styles.div_img}></div>
		</section>
	);
};

export default Form;
