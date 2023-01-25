import Link from 'next/link';
import RoundBtn from '../../UI/round-btn/RoundBtn';
import { socialLink } from '../../../data/social.data';

import styles from './hero.module.scss';
import SocialItem from './social-item/SocialItem';

const Hero = () => {
	return (
		<section className={styles.content}>
			<div className={styles.center}>
				<h1 className={styles.title_desktop}>
					MODEL <br />
					<span>2011 — 22.</span>
					PUBLIC.
				</h1>
				<h1 className={styles.title_mobile}>
					<span>2011 — 22.</span>
					<span> MODEL </span>
					<span> PUBLIC. </span>
				</h1>
				<RoundBtn>
					Стать <br /> моделью
				</RoundBtn>
			</div>
			<div className={styles.info}>
				<div className={styles.info_left}>Международное модельное агенство</div>
				<div className={styles.info_right}>
					<ul>
						{socialLink.map((item) => (
							<SocialItem item={item} key={item.link} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Hero;
