import PhotoAbout from '../app/components/about/Photo';
import HeroAbout from '../app/components/about/Hero';
import WorkAbout from '../app/components/about/Work';

const About = ()=>{
    return(
        <div className='container'>
            <HeroAbout/>
            <PhotoAbout/>
            <WorkAbout/>
        </div>
    )
}

export default About