import HeroFAQ from '@components/faq/hero';
import Posts from '@components/faq/posts';
import Layout from '@components/layout/Layout';
import type { NextPage } from 'next';

const faq: NextPage = () => {
	return (
		<Layout title='faq'>
			<HeroFAQ />
			<Posts />
		</Layout>
	);
};

export default faq;
