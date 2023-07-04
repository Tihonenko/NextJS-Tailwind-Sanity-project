import PageContact from '@components/contact/pageContact';
import Layout from '@components/layout/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';

const contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<Layout title='Контакты'>
				<PageContact />
			</Layout>
		</>
	);
};

export default contact;
