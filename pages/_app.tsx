<<<<<<< HEAD
import type { AppProps } from 'next/app';
=======
import { store } from '@app/store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
>>>>>>> home-page

import Layout from '../app/components/layout/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
	return <Component {...pageProps} />;
=======
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
>>>>>>> home-page
}

export default MyApp;
