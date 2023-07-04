import { client } from '@app/lib/sanity.client';
import { INewModelItem } from '@app/types/model.interface';
import { Hero, NewModel, News } from '@components/home-page/';
import Layout from '@components/layout/Layout';
import type { GetStaticProps, NextPage } from 'next';
import { groq } from 'next-sanity';

interface IHomeProps {
	newModel: INewModelItem[];
}

const query = groq`*[_type == "model" && model_ref._ref in *[_type=="model_ref" && name_ref == "New Model"]._id ]`;

export const getStaticProps: GetStaticProps = async () => {
	const newModel = await client.fetch(query);

	return {
		props: {
			newModel,
		},
	};
};

const Home: NextPage<IHomeProps> = ({ newModel }) => {
	return (
		<Layout title='Model Public'>
			<Hero />
			<News />
			<NewModel model={newModel[0]} />
		</Layout>
	);
};

export default Home;
