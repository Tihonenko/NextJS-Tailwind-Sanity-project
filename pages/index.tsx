import { Hero, News } from '@components/home-page/';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<News />
		</>
	);
};

export default Home;
