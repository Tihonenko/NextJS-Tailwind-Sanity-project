import { FC } from 'react';
import { useSwiper } from 'swiper/react';

interface ISlideProps {
	// onClick: React.MouseEventHandler<HTMLElement>;
	// buttonRef: any;
}

const SlidePrev: FC = ({ ...props }) => {
	return (
		<>
			<button id='prev-slide-news' {...props}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='h-6 w-6'
				>
					<path
						fillRule='evenodd'
						d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
		</>
	);
};

export default SlidePrev;
