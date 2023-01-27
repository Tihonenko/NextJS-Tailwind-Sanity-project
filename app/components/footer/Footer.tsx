import { FC } from 'react';
import { Menu } from '../header/header.data';
import MenuItem from '../header/menu-item/MenuItem';

import styles from './footer.module.scss';
import SocialItem from './social-item/SocialItem';
import { social } from '../../data/social.data';

interface IFooterProps {
	font: string;
}

const Footer: FC<IFooterProps> = ({ font }) => {
	return (
		<footer className={`${styles.content} ${font}  `}>
			<ul className={styles.list}>
				{Menu.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
			<ul className={styles.social}>
				{social.map((item) => (
					<SocialItem item={item} key={item.link} />
				))}
			</ul>
		</footer>
	);
};

export default Footer;
