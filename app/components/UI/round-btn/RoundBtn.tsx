import Link from 'next/link';
import { FC, ReactNode } from 'react';

import styles from './round-btn.module.scss';

interface IButtonProps {
	children?: ReactNode;
	link: string;
}

const RoundBtn: FC<IButtonProps> = ({ children, link }) => {
	return (
		<Link href={link} className={styles.btn}>
			{children}
		</Link>
	);
};

export default RoundBtn;
