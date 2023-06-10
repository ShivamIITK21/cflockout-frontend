import Head from 'next/head';
import styles from '../styles/Home.module.css';
import UserInput from '../components/userInput';
import Navbar from '../components/Navbar';
import ProblemCell from '../components/Cell';
import ProblemGrid from '../components/Grid';
import Row from '../components/Row';

export default function Home() {

	const problem1 = {
		contestID: 1840,
		index: "A",
		rating: 1600,
		name: "lmaolmaolmaolmao",
		status: "AC"
	}
	const problem2 = {
		contestID: 1840,
		index: "B",
		rating: 1600,
		name: "lmaolmaolmaolmao",
		status: "AC"
	}
	const problem3 = {
		contestID: 1840,
		index: "C",
		rating: 1600,
		name: "lmaolmaolmaolmao",
		status: "AC"
	}

	const problems = [problem1, problem2, problem3]

	return (
		<div className={styles.container}>
			<Navbar />
			<UserInput />
			<ProblemGrid />
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

		</div>
	)
}
