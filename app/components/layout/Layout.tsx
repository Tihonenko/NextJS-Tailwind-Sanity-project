import { FC, ReactNode } from 'react';

import Footer from '../footer/Footer';
import Header from '../header/Header';

import { helvetica, inter } from './font.variable';
import Meta from './meta/Meta';

interface ILayoutProps {
	children?: ReactNode;
	title: string | 'Model public' | undefined;
}

const Layout: FC<ILayoutProps> = ({ title, children }) => {
	return (
		<>
			<Meta title={title} />
			<Header font={inter.variable} />
			<main
				className={`${inter.variable} ${helvetica.variable} min-h-screen`}
			>
				{children}
			</main>
			<Footer font={inter.variable} />
		</>
	);
};

export default Layout;
