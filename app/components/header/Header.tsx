import Image from 'next/image';

import Logo from './Logo';
import BurgerMenu from './burger-menu/BurgerMenu';
import { Menu } from './header.data';
import styles from './header.module.scss';
import MenuItem from './menu-item/MenuItem';

interface IHeaderProps {
	font: string;
}

const Header: FC<IHeaderProps> = ({ font }) => {
	return (
		<header className={`${styles.header} `}>
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
			<BurgerMenu />
		</header>
	);
};

export default Header;
