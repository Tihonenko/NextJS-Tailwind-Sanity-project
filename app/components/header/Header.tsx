import Image from 'next/image';
import { Menu } from './header.data';
import Logo from './Logo';
import styles from './header.module.scss';
import MenuItem from './menu-item/MenuItem';
import Link from 'next/link';
import BurgerMenu from './burger-menu/BurgerMenu';

const Header = () => {
	return (
		<header className={`${styles.header} container`}>
			<Link href='/'>
				<Logo fill='#141313' />
			</Link>
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
			<BurgerMenu />
		</header>
	);
};

export default Header;
