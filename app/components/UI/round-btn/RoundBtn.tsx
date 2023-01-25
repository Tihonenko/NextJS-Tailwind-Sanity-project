import { FC, ReactNode } from 'react';

import styles from './round-btn.module.scss';

interface IButtonProps {
	children?: ReactNode;
}

const RoundBtn: FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<button {...props} className={styles.btn}>
			{children}
		</button>
	);
};

export default RoundBtn;
