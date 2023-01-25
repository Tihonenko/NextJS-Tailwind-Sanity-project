import { FC, ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { helvetica, inter } from './font.variable';

interface ILayoutProps {
	children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<>
			<Header font={inter.variable} />
			<main className={`${inter.variable} ${helvetica.variable} min-h-screen`}>
				{children}
			</main>
			<Footer font={inter.variable} />
		</>
	);
};

export default Layout;
