import Head from 'next/head';
import styles from '../styles/Home.module.css';
import UserInput from '../components/userInput';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Problems from '../components/GetProblems';

export default function Home() {

	return (
		<div className={styles.container}>
			<Navbar />
			<UserInput />
			<Problems />
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Footer />
		</div>
	)
}
