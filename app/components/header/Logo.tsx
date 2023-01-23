import { FC } from 'react';

interface ISvgProps {
	fill: string;
}

const Logo: FC<ISvgProps> = ({ fill }) => {
	return (
		<svg
			width='50'
			height='50'
			viewBox='0 0 50 50'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M22.5767 0.0718624C15.6434 0.780807 9.19204 4.41868 5.03541 9.96328C3.89173 11.4889 3.25898 12.5382 2.41034 14.317C-1.7003 22.9332 -0.485476 33.1677 5.53697 40.6588C12.1336 48.8639 22.995 52.0343 33.0188 48.6805C36.7168 47.4432 40.0493 45.3257 42.8725 42.4195C45.6823 39.527 47.4701 36.5955 48.7234 32.8253C52.2988 22.0697 48.1831 10.3211 38.6433 4.05101C35.7014 2.11739 32.2126 0.782041 28.7022 0.245829C27.1868 0.0143671 24.0191 -0.0755773 22.5767 0.0718624ZM27.7796 3.34132C36.1252 4.43287 43.1484 10.2462 45.7364 18.2052C46.5491 20.7043 46.7425 22.0113 46.741 24.9894C46.7398 27.2584 46.6989 27.8445 46.4578 29.0405C44.7758 37.3899 38.6548 43.9757 30.6246 46.076C28.3366 46.6744 27.5709 46.7665 24.9192 46.7613C22.1238 46.7559 20.6938 46.5401 18.277 45.7586C10.8194 43.3471 5.13787 36.9772 3.5994 29.3027C1.41129 18.3875 7.77662 7.60634 18.4463 4.15625C21.298 3.23411 24.693 2.93775 27.7796 3.34132ZM12.1165 17.431C12.0798 17.4904 12.0604 20.9226 12.0732 25.0581L12.0966 32.5773L13.5441 32.6121L14.9914 32.6468L15.0236 27.1717L15.0557 21.6965L17.4419 24.9539C19.5044 27.7692 19.8675 28.2061 20.1178 28.1734C20.3389 28.1446 21.3449 26.8846 24.3682 22.8501C26.5467 19.9432 28.301 17.5365 28.2666 17.5022C28.2322 17.4678 27.465 17.4454 26.5617 17.4526C24.9502 17.4653 24.9143 17.4716 24.6577 17.7857C24.5139 17.9619 23.4597 19.4026 22.3151 20.9875C21.1705 22.5723 20.2025 23.8712 20.1639 23.8739C20.1252 23.8768 19.0472 22.4354 17.7682 20.6711L15.4427 17.4632H13.9955C13.1996 17.4632 12.4661 17.4316 12.3658 17.3931C12.2654 17.3545 12.1532 17.3717 12.1165 17.431ZM30.0579 18.6662L29.0663 19.9925L31.6817 20.0542C34.1834 20.1132 34.3237 20.1296 34.9087 20.4311C35.7531 20.8662 36.2017 21.5343 36.2878 22.4848C36.3692 23.3836 36.1899 23.9889 35.6647 24.5876C34.8932 25.4669 34.8256 25.4771 29.8202 25.4802L25.3508 25.4829V29.061V32.639H26.7687H28.1866V30.3565V28.0739L31.423 28.0725C34.9361 28.0709 35.4289 28.0053 36.5612 27.3886C39.4854 25.7958 40.0733 21.3485 37.6736 18.9723C36.4353 17.7461 35.1907 17.3455 32.6079 17.3419L31.0495 17.3398L30.0579 18.6662Z'
				fill={fill}
			/>
		</svg>
	);
};

export default Logo;
