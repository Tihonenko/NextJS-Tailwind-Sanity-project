import { FC, useRef } from 'react';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from '../news.module.scss';

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
				slidesPerView={3.5}
				// style={{ cursor: 'move' }}
				className={styles.slider}
				navigation={{
					nextEl: '#next-slide-news',
					prevEl: '#prev-slide-news',
				}}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Slider;
