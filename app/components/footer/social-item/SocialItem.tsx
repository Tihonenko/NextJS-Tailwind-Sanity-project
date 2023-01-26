import { FC } from 'react';
import { ISocial } from '../../../types/social.interface';
import Link from 'next/link';
import styles from '../footer.module.scss';

interface ISocialItem {
	item: ISocial;
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
