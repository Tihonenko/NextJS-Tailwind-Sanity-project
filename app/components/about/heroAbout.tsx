import { FC } from 'react';

import styles from './about.module.scss';

const HeroAbout:FC = () => {
	return (
		<section className={styles.hero}>
			<h2 className={styles.h}>О НАС</h2>
			<div className={styles.text}>
				<p className={styles.div1}>
					Международное модельное агенство , ориентированное на поиск,
					развитие и плэйсмент молодых начинающих моделей в лучшие
					модельные агенства Европы, Америки и Азии.
				</p>
				<p className={styles.div2}>
					Сотрудничая с Modelpublic, ты доверяешь свою карьеру
					профессионалам, с опытом работы более 14 лет.
				</p>
			</div>
		</section>
	);
};

export default HeroAbout;
