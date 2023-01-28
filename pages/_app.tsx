import { store } from '@app/store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import Layout from '../app/components/layout/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
