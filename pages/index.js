import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Problems from '../components/GetProblems';


export default function Home() {

	return (
		<div>
			<Header />
			<Problems />
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Footer />
		</div>
	)
}
