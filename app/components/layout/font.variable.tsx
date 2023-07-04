import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

export const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const helvetica = localFont({
	src: [
		{
			path: '../../../public/fonts/HelveticaNeueCyr-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/HelveticaNeueCyr-Medium.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/HelveticaNeueCyr-Roman.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-helvetica',
});
