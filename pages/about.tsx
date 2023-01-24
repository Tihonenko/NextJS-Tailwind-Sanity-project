import { NextPage } from 'next';
import Photo_about from '../app/components/about/photo';
import Hero_about from '../app/components/about/hero';
import Work_about from '../app/components/about/work';

const About: NextPage = () => {
	return (
		<section className='container'>
			<Hero_about />
			<Photo_about />
			<Work_about />
		</section>
	);
};

export default About;
