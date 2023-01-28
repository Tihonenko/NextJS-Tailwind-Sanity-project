import Head from 'next/head';
import { FC } from 'react';

interface IMetaProps {
	title: string | 'Model public' | undefined;
}

const Meta: FC<IMetaProps> = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
		</Head>
	);
};

export default Meta;
