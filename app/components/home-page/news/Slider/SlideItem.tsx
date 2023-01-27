import { INewsItem } from '@app/types/news.interface';
import Link from 'next/link';
import React, { FC } from 'react';

import styles from '../news.module.scss';

interface ISLideItemProps {
	item: INewsItem;
}

const SlideItem: FC<ISLideItemProps> = ({ item }) => {
	return (
		<Link href={item.link} className={styles.item}>
			<h6>{item.data}</h6>
			<img src={item.images} alt={item.title} />
			<h2>{item.title}</h2>
			<p>{item.subtitle}</p>
		</Link>
	);
};

export default SlideItem;
