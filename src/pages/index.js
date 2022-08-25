import Head from 'next/head';

import IntroForm from '../components/form-intro';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<h1>Hello</h1>

			<IntroForm />
		</Layout>
	);
}
