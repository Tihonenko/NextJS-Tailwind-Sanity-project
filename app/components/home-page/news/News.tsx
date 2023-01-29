import SlideNavigation from '@UI/slide-navigation/SlideNavigation';
import SlideNext from '@UI/slide-navigation/SlideNext';
import SlidePrev from '@UI/slide-navigation/SlidePrev';
import { FC, useRef } from 'react';
import { useSwiper } from 'swiper/react';

import Slider from './Slider/Slider';
import styles from './news.module.scss';

const News: FC = () => {
	const navigationPrev = useRef<null | HTMLButtonElement>(null);
	const swiper = useSwiper();

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
