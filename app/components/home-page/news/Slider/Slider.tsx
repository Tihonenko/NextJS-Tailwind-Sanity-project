import { newsPost } from '@data/news.data';
import { FC, useRef } from 'react';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from '../news.module.scss';

import SlideItem from './SlideItem';

interface ISlideProps {
	prevEl: any;
}

const Slider: FC = () => {
	return (
		<>
			<Swiper
				loop={true}
				modules={[FreeMode, Navigation]}
				spaceBetween={30}
				slidesPerView='auto'
				speed={700}
				direction='horizontal'
				className={styles.slider}
				breakpoints={{
					320: {
						slidesPerView: 1.5,
					},
					640: {
						slidesPerView: 2,
					},
					834: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 3.5,
					},
					1400: {
						slidesPerView: 3.5,
					},
				}}
				navigation={{
					nextEl: '#next-slide-news',
					prevEl: '#prev-slide-news',
				}}
			>
				{newsPost.map((item, idx) => (
					<SwiperSlide key={idx}>
						<SlideItem item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
