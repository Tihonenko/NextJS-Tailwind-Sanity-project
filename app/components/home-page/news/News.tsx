import SlideNext from '@UI/slide-navigation/SlideNext';
import SlidePrev from '@UI/slide-navigation/SlidePrev';
import { FC } from 'react';

import Slider from './Slider/Slider';
import styles from './news.module.scss';

const News: FC = () => {
	return (
		<section className={styles.news}>
			<div className={styles.header}>
				<h3 className={styles.title}>Новости</h3>
				<div className={styles.slide_navigation}>
					<SlidePrev />
					<SlideNext />
				</div>
			</div>
			<button></button>
			<div className='slider_container'>
				<Slider />
			</div>
		</section>
	);
};

export default News;
