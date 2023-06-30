import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Problems from '../components/GetProblems';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#2b2d42",
        },
        secondary: {
            main: "#8d99ae",
        },
    },
});


export default function Home() {

	return (
		<div>
			<ThemeProvider theme={defaultTheme}>
				<Header />
				<Problems />
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Footer />
			</ThemeProvider>
		</div>
	)
}
