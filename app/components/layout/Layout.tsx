import { FC, ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface ILayoutProps {
	children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='min-h-screen'>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
