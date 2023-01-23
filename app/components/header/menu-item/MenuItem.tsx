import { FC } from 'react';
import { IMenuLink } from './menu-link.interface';
import Link from 'next/link';

interface IMenuItem {
	item: IMenuLink;
}
const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.name}</Link>
		</li>
	);
};

export default MenuItem;
