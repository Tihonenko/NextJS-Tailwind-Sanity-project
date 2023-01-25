import PhotoAbout from '../app/components/about/photo';
import HeroAbout from '../app/components/about/heroAbout';
import WorkAbout from '../app/components/about/work';

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
