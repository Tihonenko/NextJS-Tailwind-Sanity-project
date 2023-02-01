import { Hero, NewModel, News } from '@components/home-page/';
import Layout from '@components/layout/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout title='Model Public'>
			<Hero />
			<News />
			<NewModel />
		</Layout>
	);
};

export default Home;
