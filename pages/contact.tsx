import PageContact from '@components/contact/pageContact';
import Layout from '@components/layout/Layout';
import type { NextPage } from 'next';

const contact: NextPage = () => {
	return (
		<Layout title='Контакты'>
			<PageContact />
		</Layout>
	);
};

export default contact;
