import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Menu } from '../header.data';
import styles from '../header.module.scss';
import MenuItem from '../menu-item/MenuItem';

import { itemVariant, menuTransition, menuVariant } from './variant';

const BurgerMenu = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<button
				className={styles.header_menu}
				onClick={() => setOpen((prev) => !prev)}
			>
				<Image
					src='/images/svg/menu.svg'
					width={20}
					height={13}
					alt='menu'
				/>
			</button>

			{/* <AnimatePresence> */}
			<motion.div
				initial='hidden'
				animate={isOpen ? 'open' : 'close'}
				variants={menuVariant}
				transition={menuTransition}
				className={styles.menu}
			>
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
				<ul>
					{Menu.map((item, i) => (
						<motion.li
							initial='hidden'
							animate={isOpen ? 'open' : 'close'}
							variants={{
								open: {
									...itemVariant.open,
									transition: {
										type: 'spring',
										duration: 1,
										stiffness: 33,
										delay: i + 0.2,
									},
								},

								close: {
									...itemVariant.close,
									transition: {
										type: 'spring',
										duration: 1,
										stiffness: 33,
									},
								},
							}}
							key={i}
						>
							<Link
								onClick={() => setOpen((prev) => !prev)}
								href={item.link}
							>
								{item.name}
							</Link>
						</motion.li>
					))}
				</ul>
			</motion.div>
			{/* </AnimatePresence> */}
		</>
	);
};

export default BurgerMenu;
