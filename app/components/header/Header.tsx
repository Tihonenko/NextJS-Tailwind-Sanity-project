import Image from 'next/image';
import { Menu } from './header.data';
import Logo from './Logo';
import styles from './header.module.scss';
import MenuItem from './menu-item/MenuItem';
<<<<<<< HEAD
import Link from 'next/link';
import BurgerMenu from './burger-menu/BurgerMenu';
=======
import { FC } from 'react';
>>>>>>> home-page

interface IHeaderProps {
	font: string;
}

const Header: FC<IHeaderProps> = ({ font }) => {
	return (
<<<<<<< HEAD
		<header className={`${styles.header} `}>
		
=======
		<header className={`${styles.header}  ${font} `}>
			<Logo fill='#141313' />
>>>>>>> home-page
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
					className=' black mr-4 inline-block'
				/>
				Fallen Greatness
			</button>
<<<<<<< HEAD
			<BurgerMenu />
=======
			<button className={styles.header_menu}>
				<Image src='/images/svg/menu.svg' width={20} height={13} alt='menu' />
			</button>
>>>>>>> home-page
		</header>
	);
};

export default Header;
