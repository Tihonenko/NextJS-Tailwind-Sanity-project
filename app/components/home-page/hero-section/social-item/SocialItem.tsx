import Link from 'next/link';
import { FC } from 'react';
import { ISocialLink } from '../../../../types/social.interface';

interface ISocialItemProps {
	item: ISocialLink;
}

const SocialItem: FC<ISocialItemProps> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.name}</Link>
		</li>
	);
};

export default SocialItem;
