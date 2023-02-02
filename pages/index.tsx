import { client } from '@app/lib/sanity.client';
import { IModelItem } from '@app/types/types';
import { Hero, NewModel, News } from '@components/home-page/';
import Layout from '@components/layout/Layout';
import type { NextPage } from 'next';
import { groq } from 'next-sanity';

interface IHomeProps {
	model: IModelItem[];
}

const Home: NextPage<IHomeProps> = ({ model }) => {
	return (
		<Layout title='Model Public'>
			<Hero />
			<News />
			<NewModel model={model[0]} />
		</Layout>
	);
};

export default Home;
const query = groq`*[_type == "model"]`;

export async function getStaticProps() {
	const model = await client.fetch(query);

	return {
		props: {
			model,
		},
	};
}
