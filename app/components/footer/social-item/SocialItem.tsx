import { FC } from 'react';
import { ISocialLink } from './social.interface';
import Link from 'next/link';
import styles from '../footer.module.scss';

interface ISocialItem {
	item: ISocialLink;
}

const SocialItem: FC<ISocialItem> = ({ item }) => {
	return (
		<li className={styles.social_item}>
			<Link href={item.link}>
				<img src={item.image} alt='item.link' />
			</Link>
		</li>
	);
};

export default SocialItem;
