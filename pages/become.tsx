import HeroBecome from '@components/become-page/becomeHero';
import Form from '@components/become-page/form';
import Layout from '@components/layout/Layout';
import { NextPage } from 'next';

const become: NextPage = () => {
	return (
		<Layout title='Стать моделью'>
			<HeroBecome />
			<Form />
		</Layout>
	);
};

export default become;
