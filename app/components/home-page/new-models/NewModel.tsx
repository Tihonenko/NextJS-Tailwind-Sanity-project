import { urlFor } from '@app/lib/sanity.client';
import { INewModelItem } from '@app/types/model.interface';
import { RoundBtn } from '@components/UI/';
import { social } from '@data/social.data';
import useMediaQuery from '@hooks/useMediaQuery';
import Link from 'next/link';
import { FC } from 'react';

import styles from './new_model.module.scss';

interface IModelProps {
	model: INewModelItem;
}

const NewModel: FC<IModelProps> = ({ model }) => {
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
							src={urlFor(model.main_image[0]).url()}
							alt='main'
						/>
						<div className={styles.center}>
							<div className={styles.center_info}>
								<h3>{model.meta_title}</h3>
								<p>{model.description}</p>
								<Link href={model.instagram_url}>
									<img src={social[1].image} alt='instagram' />
								</Link>
							</div>
							<img
								className={styles.center_img}
								src={urlFor(model.main_image[1]).url()}
								alt='second'
							/>
						</div>
						<div className={styles.right}>
							<img
								className={styles.right_img}
								src={urlFor(model.main_image[2]).url()}
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
							src={urlFor(model.main_image[0]).url()}
							alt='main'
						/>
						<div className={styles.center_mobile}>
							<img
								className={styles.center_mobile_right_img}
								src={urlFor(model.main_image[1]).url()}
								alt='second'
							/>
							<img
								className={styles.center_mobile_left_img}
								src={urlFor(model.main_image[2]).url()}
								alt='third'
							/>
						</div>
						{isAboveSmallQuery ? (
							<>
								<div className={styles.center_info}>
									<h3>{model.meta_title}</h3>
									<p>{model.description}</p>
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
									<h3>{model.meta_title}</h3>
									<p>{model.description}</p>
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
