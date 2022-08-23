import Footer from './Footer';
import IntroForm from './form-intro';
import Header from './Header';

export default function Layout({children}) {
	return (
		<>
			<Header />
			<IntroForm />
			<main>{children}</main>
			<Footer />
		</>
	);
}
