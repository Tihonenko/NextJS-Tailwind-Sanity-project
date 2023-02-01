import React, { FC } from 'react';

import Image from 'next/image';

import styles from './contact.module.scss';

const PageContact:FC = () => {
	return (
		<section className={styles.contact}>
			<div className={styles.mainimg}>
				<Image
					src='/images/contact.png'
					alt='foto'
					width={1000}
					height={2000}
					className={styles.img}
				/>
			</div>
			<div className={styles.main}>
				<div>
					<h1 className={styles.h}>КОНТАКТЫ</h1>
					<p className={styles.text}>
						Все встречи с новыми моделями мы проводим в формате зума.
						После звонка мы можем пригласить вас на просмотр и пробные
						снепы, которые мы проводим в центральных фотостудиях, либо
						co-working пространствах Москвы.
					</p>
				</div>
				<h2 className={styles.write}>HАПИСАТЬ НАМ</h2>
				<div className={styles.boxmail}>
					<div className={styles.mail}>CHERIEMODELS@GMAIL.COM</div>
					<div className={styles.img}>
						<Image
							src='/images/contact.png'
							alt='foto'
							width={100}
							height={200}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageContact;
