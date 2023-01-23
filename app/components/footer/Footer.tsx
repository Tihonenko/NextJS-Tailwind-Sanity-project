import { Menu } from '../header/header.data';
import MenuItem from '../header/menu-item/MenuItem';

import styles from './footer.module.scss';
import SocialItem from './social-item/SocialItem';
import { social } from './social.data';

const Footer = () => {
	return (
		<footer className={styles.content}>
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
