<<<<<<< HEAD
import { Hero, News } from '@components/home-page/';
import Layout from '@components/layout/Layout';
=======
import { Hero, NewModel, News } from '@components/home-page/';
>>>>>>> home-page
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout title='Model Public'>
			<Hero />
			<News />
<<<<<<< HEAD
		</Layout>
=======
			<NewModel />
		</>
>>>>>>> home-page
	);
};

export default Home;
