import Image from 'next/image';
import { Menu } from './header.data';
import MenuItem from './menu-item/MenuItem';

const Header = () => {
	return (
		<header className='container'>
			<Image src='/images/logo.svg' width={50} height={50} alt='logo' />
			<nav>
				<ul>
					{Menu.map((item) => (
						<MenuItem item={item} key={item.link} />
					))}
				</ul>
			</nav>
			<button>
				<Image
					src='/images/svg/Polygon.svg'
					alt='polygon'
					width={15}
					height={15}
					className=' black inline-block'
				/>
				Fallen Greatness
			</button>
		</header>
	);
};

export default Header;
