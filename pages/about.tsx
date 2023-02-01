import HeroAbout from '@components/about/heroAbout';
import PhotoAbout from '@components/about/photo';
import WorkAbout from '@components/about/work';
import Layout from '@components/layout/Layout';
import type { NextPage } from 'next';

const About: NextPage = () => {
	return (
		<Layout title='Про агенство'>
			<HeroAbout />
			<PhotoAbout />
			<WorkAbout />
		</Layout>
	);
};

export default About;
