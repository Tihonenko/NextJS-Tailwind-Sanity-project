import Layout from '@components/layout/Layout';

import HeroAbout from '../app/components/about/heroAbout';
import PhotoAbout from '../app/components/about/photo';
import WorkAbout from '../app/components/about/work';

const About = () => {
	return (
		<Layout title='Про агенство'>
			<HeroAbout />
			<PhotoAbout />
			<WorkAbout />
		</Layout>
	);
};

export default About;
