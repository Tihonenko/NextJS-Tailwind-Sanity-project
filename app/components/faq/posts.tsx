import { FC } from 'react';

import Post from './post/post';
import { Postdata } from './faq.data';

import styles from './faq.module.scss';

const Posts:FC = () => {
	return (
		<section className={styles.posts}>
			{Postdata.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</section>
	);
};

export default Posts;
