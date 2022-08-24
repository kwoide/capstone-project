import Footer from './Footer';
import IntroForm from './form-intro';
import Header from './Header';

export default function Layout({children}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<IntroForm />
			<Footer />
		</>
	);
}
