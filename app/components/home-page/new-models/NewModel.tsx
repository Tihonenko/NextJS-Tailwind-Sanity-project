import { getOne } from '@app/store/models';
import { RoundBtn } from '@components/UI/';
import { social } from '@data/social.data';
import { useAppDispatch, useAppSelector } from '@hooks/hooksRedux';
import Link from 'next/link';
import { FC } from 'react';

import styles from './new_model.module.scss';

const NewModel: FC = () => {
	const items = useAppSelector((state) => state.model.items[0]);

	return (
		<section className={styles.content}>
			<h2 className={styles.header}>Новые лица</h2>
			<div className={styles.content_main}>
				<img className={styles.left_img} src={items.image[0]} alt='main' />
				<div className={styles.center}>
					<div className={styles.center_info}>
						<h3>{items.name}</h3>
						<p>{items.infoText}</p>
						<Link href={social[1].link}>
							<img src={social[1].image} alt='instagram' />
						</Link>
					</div>
					<img
						className={styles.center_img}
						src={items.image[1]}
						alt='second'
					/>
				</div>
				<div className={styles.right}>
					<img
						className={styles.right_img}
						src={items.image[2]}
						alt='third'
					/>
					<RoundBtn link=''>
						Профиль <br />
						модели
					</RoundBtn>
				</div>
			</div>
		</section>
	);
};

export default NewModel;
