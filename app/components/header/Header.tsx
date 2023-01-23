import Image from 'next/image';
import { Menu } from './header.data';
import Logo from './Logo';
import styles from './header.module.scss';
import MenuItem from './menu-item/MenuItem';

const Header = () => {
	return (
		<header className={`${styles.header} container`}>
			<Logo fill='#141313' />
			<nav className={styles.header_nav}>
				<ul>
					{Menu.map((item) => (
						<MenuItem item={item} key={item.link} />
					))}
				</ul>
			</nav>
			<button className={styles.header_fallen}>
				<Image
					src='/images/svg/Polygon.svg'
					alt='polygon'
					width={15}
					height={15}
					className=' black inline-block'
				/>
				Fallen Greatness
			</button>
			<button className={styles.header_menu}>
				<Image
					src='/images/svg/menu.svg'
					width={20}
					height={13}
					alt='menu'
				></Image>
			</button>
		</header>
	);
};

export default Header;
