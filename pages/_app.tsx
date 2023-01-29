import { store } from '@app/store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
