import { getOne } from '@app/store/models';
import { RoundBtn } from '@components/UI/';
import { social } from '@data/social.data';
import { useAppDispatch, useAppSelector } from '@hooks/hooksRedux';
import useMediaQuery from '@hooks/useMediaQuery';
import Link from 'next/link';
import { FC } from 'react';

import styles from './new_model.module.scss';

const NewModel: FC = () => {
	const items = useAppSelector((state) => state.model.items[0]);

	const isAboveMobileQuery = useMediaQuery('(min-width: 834px)');
	const isAboveSmallQuery = useMediaQuery('(min-width: 640px)');

	return (
		<section className={styles.content}>
			<h2 className={styles.header}>Новые лица</h2>
			<div className={styles.content_main}>
				{isAboveMobileQuery ? (
					<>
						<img
							className={styles.left_img}
							src={items.image[0]}
							alt='main'
						/>
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
					</>
				) : (
					<>
						<img
							className={styles.left_img}
							src={items.image[0]}
							alt='main'
						/>
						<div className={styles.center_mobile}>
							<img
								className={styles.center_mobile_right_img}
								src={items.image[1]}
								alt='second'
							/>
							<img
								className={styles.center_mobile_left_img}
								src={items.image[2]}
								alt='third'
							/>
						</div>
						{isAboveSmallQuery ? (
							<>
								<div className={styles.center_info}>
									<h3>{items.name}</h3>
									<p>{items.infoText}</p>
									<Link href={social[1].link}>
										<img src={social[1].image} alt='instagram' />
									</Link>
								</div>
								<div className={styles.btn_wrapper}>
									<RoundBtn link=''>
										Профиль <br />
										модели
									</RoundBtn>
								</div>
							</>
						) : (
							<>
								<div className={styles.center_info}>
									<h3>{items.name}</h3>
									<p>{items.infoText}</p>
								</div>
								<div className={styles.btn_wrapper}>
									<Link
										href={social[1].link}
										className={styles.instagram_btn}
									>
										<img src={social[1].image} alt='instagram' />
									</Link>
									<RoundBtn link=''>
										Профиль <br />
										модели
									</RoundBtn>
								</div>
							</>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default NewModel;
