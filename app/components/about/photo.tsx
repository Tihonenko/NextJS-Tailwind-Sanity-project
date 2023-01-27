import Image from 'next/image';
import styles from './about.module.scss'

const PhotoAbout = () =>{
    return(
        <section className={styles.photo}>
                <Image src='/images/about.png'
                alt='photo'
                className={styles.img}
                width={1360}
                height={510}
                />
        </section>
    )
}

export default PhotoAbout