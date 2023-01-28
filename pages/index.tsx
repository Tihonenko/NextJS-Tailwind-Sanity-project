import { Hero, NewModel, News } from '@components/home-page/';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<News />
			<NewModel />
		</>
	);
};

export default Home;
